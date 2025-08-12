
'use client';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Redirect to login page
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
      <div>Redirecting to login...</div>
    </div>
  );
}
