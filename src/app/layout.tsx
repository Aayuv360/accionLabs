
```typescript
import * as React from "react";
import { cookies } from "next/headers";
import ClientProviders from "@/components/ClientProviders";

async function getCustomerKeyFromCookies(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get('session_customer')?.value || '';
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const customerKey = await getCustomerKeyFromCookies();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ClientProviders customerKey={customerKey}>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
```
