
'use client';

import { useEffect } from 'react';
import { getCustomerKeyFromCookies } from '@/lib/auth';

export default function HomePage() {
  useEffect(() => {
    const customerKey = getCustomerKeyFromCookies();
    
    if (customerKey) {
      window.location.href = '/dashboard';
    } else {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div>Loading...</div>
    </div>
  );
}
