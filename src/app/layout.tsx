import * as React from "react";
import { cookies } from "next/headers";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ClientProviders from "@/components/ClientProviders";
import { createHydrationSafeState } from "@/lib/serverState";
import theme from "@/utils/theme.js";

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
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ClientProviders
              customerKey={customerKey}
              initialReduxState={initialReduxState}
            >
              {children}
            </ClientProviders>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
