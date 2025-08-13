
import { redirect } from "next/navigation";

export default function LogoutPage() {
  // Redirect to the logout API route which properly handles cookie clearing
  redirect("/api/logout");
}
