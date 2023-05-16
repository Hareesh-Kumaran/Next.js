import { NextResponse } from "next/server";
export async function GET(request, props) {
  const { id } = props.params;

  const res = await fetch(process.env.TODO_ENDPOINT + id);
  const data = await res.json();

  return NextResponse.json({
    data,
    success: true,
  });
}
