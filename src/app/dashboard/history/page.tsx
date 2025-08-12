
import React from "react";
import { cookies } from "next/headers";
import HistoryClientPage from "@/components/HistoryClientPage";

export default async function History() {
  const cookieStore = await cookies();
  const customerKey = cookieStore.get('session_customer')?.value || '';
  
  return <HistoryClientPage customerKey={customerKey} />;
}
