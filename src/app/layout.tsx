import * as React from "react";
import { cookies } from "next/headers";
import ClientProviders from "@/components/ClientProviders";

function getCustomerKeyFromCookies(): string {
  const cookieStore = cookies();
  return cookieStore.get('session_customer')?.value || '';
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const customerKey = getCustomerKeyFromCookies();

  return (
    <html lang="en">
      <body>
        <ClientProviders customerKey={customerKey}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}