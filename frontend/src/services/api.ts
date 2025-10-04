import axios from "axios";

import { useAuthStore } from "@/store/auth";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

api.interceptors.request.use((config) => {

  const token =
    useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {

    const refresh =
      useAuthStore.getState().refreshToken;

    if (
      error.response?.status === 401 &&
      refresh
    ) {

      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/refresh",
        {
          refresh_token: refresh,
        }
      );

      useAuthStore.getState().setTokens(
        response.data.access_token,
        response.data.refresh_token
      );

      error.config.headers.Authorization =
        `Bearer ${response.data.access_token}`;

      return axios(error.config);
    }

    return Promise.reject(error);
  }
);

export default api;