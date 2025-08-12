
'use client'
//src/app/layout.tsx


import * as React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import createEmotionCache from "@/createEmotionCache";
import { makeStore } from "@/store";
import { ReduxProvider } from "@/store/provider";

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  palette: {
    primary: { main: "#556cd6" },
    secondary: { main: "#19857b" },
  },
});
const store = makeStore()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body>
        <CacheProvider value={clientSideEmotionCache}>
          <ReduxProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider></ReduxProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
