
import React from "react";
import { cookies } from "next/headers";
import HistoryClientPage from "@/components/HistoryClientPage";

async function getCustomerKeyFromCookies(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get('session_customer')?.value || '';
}

export default async function History() {
  const customerKey = await getCustomerKeyFromCookies();
  
  return <HistoryClientPage customerKey={customerKey} />;
}
