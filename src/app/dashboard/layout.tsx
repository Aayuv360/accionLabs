
import React, { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardClientLayout from "@/components/DashboardClientLayout";

type Props = {
  children: ReactNode;
};

async function getCustomerKeyFromCookies(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get('session_customer')?.value || '';
}

export default async function DashboardLayout({ children }: Props) {
  const customerKey = await getCustomerKeyFromCookies();

  if (!customerKey) {
    redirect("/login");
  }

  return (
    <DashboardClientLayout customerKey={customerKey}>
      {children}
    </DashboardClientLayout>
  );
}
