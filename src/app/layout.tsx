import * as React from "react";
import { cookies } from "next/headers";
import ClientProviders from "@/components/ClientProviders";
import { createHydrationSafeState } from "@/lib/serverState";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const customerKey = cookieStore.get("session_customer")?.value || "";

  const initialReduxState = createHydrationSafeState({
    cart: { items: [] },
    search: { keyword: "" },
  });

  return (
    <html lang="en">
      <head></head>
      <body style={{ margin: 0 }}>
        <ClientProviders
          customerKey={customerKey}
          initialReduxState={initialReduxState}
        >
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}