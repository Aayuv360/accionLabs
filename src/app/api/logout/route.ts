import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  const res = NextResponse.redirect("/login");

  const cookie = serialize("session_customer", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
    sameSite: "lax",
  });

  res.headers.set("Set-Cookie", cookie);
  return res;
}
