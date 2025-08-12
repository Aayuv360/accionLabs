
import React, { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardClientLayout from "@/components/DashboardClientLayout";

type Props = {
  children: ReactNode;
};

export default async function DashboardLayout({ children }: Props) {
  const cookieStore = await cookies();
  const customerKey = cookieStore.get('session_customer')?.value || '';

  if (!customerKey) {
    redirect("/login");
  }

  return (
    <DashboardClientLayout customerKey={customerKey}>
      {children}
    </DashboardClientLayout>
  );
}
