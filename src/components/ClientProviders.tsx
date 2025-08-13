"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CustomerProvider } from "@/contexts/CustomerContext";
import { ReduxProvider } from "@/store/provider";
import { muiTheme } from "@/utils/muiTheme";

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
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ReduxProvider initialState={initialReduxState}>
        <CustomerProvider customerKey={customerKey}>
          {children}
        </CustomerProvider>
      </ReduxProvider>
    </ThemeProvider>
  );
}