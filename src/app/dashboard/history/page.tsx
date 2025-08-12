
import React from "react";
import { cookies } from "next/headers";
import HistoryClientPage from "@/components/HistoryClientPage";

function getCustomerKeyFromCookies(): string {
  const cookieStore = cookies();
  return cookieStore.get('session_customer')?.value || '';
}

export default function History() {
  const customerKey = getCustomerKeyFromCookies();
  
  return <HistoryClientPage customerKey={customerKey} />;
}
