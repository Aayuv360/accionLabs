
import { NextResponse } from "next/server";
import { serialize } from "cookie";

function handleLogout() {
  const cookie = serialize("session_customer", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
    sameSite: "lax",
  });

  const response = NextResponse.redirect(new URL("/login", process.env.NEXTAUTH_URL || "http://localhost:3000"));
  response.headers.set("Set-Cookie", cookie);
  
  return response;
}

export async function GET() {
  return handleLogout();
}

export async function POST() {
  return handleLogout();
}
