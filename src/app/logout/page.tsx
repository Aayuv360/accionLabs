
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LogoutPage() {
  const cookieStore = await cookies();
  
  // Clear the session cookie
  cookieStore.delete('session_customer');
  
  // Redirect to login
  redirect("/login");
}
