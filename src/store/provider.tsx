
"use client";
import { Provider } from "react-redux";
import { makeStore } from "@/store/index";
import { useRef } from "react";

interface ReduxProviderProps {
  children: React.ReactNode;
  initialState?: any;
}

export function ReduxProvider({ children, initialState }: ReduxProviderProps) {
  const storeRef = useRef<ReturnType<typeof makeStore>>();
  
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore(initialState);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
