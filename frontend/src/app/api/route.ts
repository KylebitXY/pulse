import { NextResponse }
from "next/server";

export async function GET() {

  return NextResponse.json({
    status: "ok",
    workers: 12,
    queues: 248,
  });

}