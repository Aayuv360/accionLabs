import { NextResponse } from "next/server";
import { authenticate } from "@/utils/theme";
import { serializeSessionCookie } from "@/lib/auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const username = formData.get("username")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const customerKey = authenticate(username, password);
  if (!customerKey) {
    return NextResponse.redirect(new URL("/login?error=Invalid%20credentials", request.url));
  }

  const cookie = serializeSessionCookie(customerKey);
  
  const response = NextResponse.redirect(new URL("/dashboard", request.url));
  response.headers.set("Set-Cookie", cookie);

  return response;
}
