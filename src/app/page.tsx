
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getCustomerKeyFromCookies(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get('session_customer')?.value || '';
}

export default async function HomePage() {
  const customerKey = await getCustomerKeyFromCookies();
  
  if (customerKey) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
