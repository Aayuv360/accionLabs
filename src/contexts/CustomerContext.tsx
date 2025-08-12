
'use client';

import React, { createContext, useContext } from 'react';

interface CustomerContextType {
  customerKey: string;
}

const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export function CustomerProvider({ 
  children, 
  customerKey 
}: { 
  children: React.ReactNode; 
  customerKey: string;
}) {
  return (
    <CustomerContext.Provider value={{ customerKey }}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  const context = useContext(CustomerContext);
  if (context === undefined) {
    throw new Error('useCustomer must be used within a CustomerProvider');
  }
  return context;
}
