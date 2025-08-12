// app/logout/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { serialize } from "cookie";

export default function LogoutPage() {

  serialize("session_customer", "", {
    path: "/",
    httpOnly: true,
    maxAge: 0,
    sameSite: "lax",
  });

 

  redirect("/login");
}
