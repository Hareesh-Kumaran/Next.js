import { NextResponse } from "next/server";
export async function GET(req) {
  return NextResponse.json({
    message: "Hi from basic route",
    success: true,
  });
}
