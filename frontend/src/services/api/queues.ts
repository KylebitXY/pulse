import { api }
from "./client";

export async function getQueues() {

  const response =
    await api.get("/queues");

  return response.data;
}