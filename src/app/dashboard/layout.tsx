
import React, { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardClientLayout from "@/components/DashboardClientLayout";

type Props = {
  children: ReactNode;
};

function getCustomerKeyFromCookies(): string {
  const cookieStore = cookies();
  return cookieStore.get('session_customer')?.value || '';
}

export default function DashboardLayout({ children }: Props) {
  const customerKey = getCustomerKeyFromCookies();

  if (!customerKey) {
    redirect("/login");
  }

  return (
    <DashboardClientLayout customerKey={customerKey}>
      {children}
    </DashboardClientLayout>
  );
}
