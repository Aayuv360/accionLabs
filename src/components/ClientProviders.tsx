
'use client';

import React from 'react';
import { CustomerProvider } from '@/contexts/CustomerContext';
import { ReduxProvider } from '@/store/provider';

interface ClientProvidersProps {
  children: React.ReactNode;
  customerKey: string;
}

export default function ClientProviders({ children, customerKey }: ClientProvidersProps) {
  return (
    <ReduxProvider>
      <CustomerProvider customerKey={customerKey}>
        {children}
      </CustomerProvider>
    </ReduxProvider>
  );
}
