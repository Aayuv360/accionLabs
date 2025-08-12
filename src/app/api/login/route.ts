
import { NextResponse } from "next/server";
import { authenticate } from "@/utils/theme";
import { serializeSessionCookie } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const username = formData.get("username")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    console.log("Login attempt:", username);

    const customerKey = authenticate(username, password);
    if (!customerKey) {
      console.log("Authentication failed for:", username);
      return NextResponse.redirect(new URL("/login?error=Invalid%20credentials", request.url), 302);
    }

    console.log("Authentication successful for:", username, "customerKey:", customerKey);

    const cookie = serializeSessionCookie(customerKey);
    console.log("Setting cookie:", cookie);
    
    const dashboardUrl = new URL("/dashboard", request.url);
    const response = NextResponse.redirect(dashboardUrl, 302);
    response.headers.set("Set-Cookie", cookie);

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.redirect(new URL("/login?error=Server%20error", request.url), 302);
  }
}
