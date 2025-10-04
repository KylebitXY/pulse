export type SystemStatus = {

  api: string;

  websocket: string;

  queue: string;

  workers: number;

  eventsProcessed: number;

  failedJobs: number;

  uptime: string;

};

export async function getSystemStatus():

Promise<SystemStatus> {

  return {

    api: "ONLINE",

    websocket: "CONNECTED",

    queue: "HEALTHY",

    workers: 8,

    eventsProcessed: 18420,

    failedJobs: 2,

    uptime: "99.98%",

  };

}