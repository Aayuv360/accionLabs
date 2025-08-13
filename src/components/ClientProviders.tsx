"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CustomerProvider } from "@/contexts/CustomerContext";
import { ReduxProvider } from "@/store/provider";
import muiTheme from "@/utils/muiTheme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

interface ClientProvidersProps {
  children: React.ReactNode;
  customerKey: string;
  initialReduxState?: any;
}

export default function ClientProviders({
  children,
  customerKey,
  initialReduxState,
}: ClientProvidersProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ReduxProvider initialState={initialReduxState}>
          <CustomerProvider customerKey={customerKey}>
            {children}
          </CustomerProvider>
        </ReduxProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}