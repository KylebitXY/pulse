import { api }
from "./client";

export async function getWorkers() {

  const response =
    await api.get("/workers");

  return response.data;
}