"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    const response = await api.post(
      "/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "token",
      response.data.access_token
    );

    alert("Logged in");
  };

  return (
    <div className="p-10">

      <h1 className="text-2xl mb-4">
        Login
      </h1>

      <input
        className="border p-2 block mb-2"
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        className="border p-2 block mb-2"
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        className="bg-black text-white px-4 py-2"
        onClick={login}
      >
        Login
      </button>

    </div>
  );
}