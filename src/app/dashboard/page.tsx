
import React from "react";
import { cookies } from "next/headers";
import DashboardClientPage from "@/components/DashboardClientPage";

async function getCustomerKeyFromCookies(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get('session_customer')?.value || '';
}

export default async function Dashboard() {
  const customerKey = await getCustomerKeyFromCookies();
  
  return <DashboardClientPage customerKey={customerKey} />;
}
