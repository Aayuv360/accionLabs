
'use client';

import { useEffect } from 'react';

export default function LogoutPage() {
  useEffect(() => {
    // Clear the session cookie
    document.cookie = 'session_customer=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    
    // Redirect to login
    window.location.href = '/login';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div>Logging out...</div>
    </div>
  );
}
