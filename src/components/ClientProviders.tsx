
'use client';

import React from 'react';
import { CustomerProvider } from '@/contexts/CustomerContext';
import { ReduxProvider } from '@/store/provider';

interface ClientProvidersProps {
  children: React.ReactNode;
  customerKey: string;
  initialReduxState?: any;
}

export default function ClientProviders({ children, customerKey, initialReduxState }: ClientProvidersProps) {
  return (
    <ReduxProvider initialState={initialReduxState}>
      <CustomerProvider customerKey={customerKey}>
        {children}
      </CustomerProvider>
    </ReduxProvider>
  );
}
