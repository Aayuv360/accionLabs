
import React from "react";
import { cookies } from "next/headers";
import DashboardClientPage from "@/components/DashboardClientPage";

function getCustomerKeyFromCookies(): string {
  const cookieStore = cookies();
  return cookieStore.get('session_customer')?.value || '';
}

export default function Dashboard() {
  const customerKey = getCustomerKeyFromCookies();
  
  return <DashboardClientPage customerKey={customerKey} />;
}
