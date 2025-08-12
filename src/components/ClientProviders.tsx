
'use client';

import React from 'react';
import { CustomerProvider } from '@/contexts/CustomerContext';

interface ClientProvidersProps {
  children: React.ReactNode;
  customerKey: string;
}

export default function ClientProviders({ children, customerKey }: ClientProvidersProps) {
  return (
    <CustomerProvider customerKey={customerKey}>
      {children}
    </CustomerProvider>
  );
}
