
import * as React from "react";
import { cookies } from "next/headers";
import ClientProviders from "@/components/ClientProviders";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const customerKey = cookieStore.get('session_customer')?.value || '';

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} style={{margin:0}}>
        <ClientProviders customerKey={customerKey}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
