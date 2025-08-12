
'use client';

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import createEmotionCache from "@/createEmotionCache";
import { ReduxProvider } from "@/store/provider";
import { CustomerProvider } from "@/contexts/CustomerContext";

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  palette: {
    primary: { main: "#556cd6" },
    secondary: { main: "#19857b" },
  },
});

interface ClientProvidersProps {
  children: React.ReactNode;
  customerKey: string;
}

export default function ClientProviders({ children, customerKey }: ClientProvidersProps) {
  return (
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
  );
}
