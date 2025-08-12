//src/app/layout.tsx

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import createEmotionCache from "@/createEmotionCache";
import { ReduxProvider } from "@/store/provider";
import { CustomerProvider } from "@/contexts/CustomerContext";
import { cookies } from "next/headers";

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  palette: {
    primary: { main: "#556cd6" },
    secondary: { main: "#19857b" },
  },
});

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
        <CacheProvider value={clientSideEmotionCache}>
          <ReduxProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <CustomerProvider customerKey={customerKey}>
                {children}
              </CustomerProvider>
            </ThemeProvider>
          </ReduxProvider>
        </CacheProvider>
      </body>
    </html>
  );
}