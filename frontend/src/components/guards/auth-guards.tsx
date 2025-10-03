"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { useAuthStore } from "@/store/auth";

export function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  const token =
    useAuthStore(
      (state) => state.accessToken
    );

  useEffect(() => {

    if (!token) {
      router.push("/login");
    }

  }, [token]);

  if (!token) {
    return null;
  }

  return children;
}