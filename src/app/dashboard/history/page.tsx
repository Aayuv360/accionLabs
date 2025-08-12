"use client";
import { useEffect, useState } from "react";
import ProductHistory from "@/components/ProductHistory";
import { getCustomerKeyFromCookies } from "@/lib/auth";

export default function History() {
  const [customerKey, setCustomerKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const key = getCustomerKeyFromCookies();
    setCustomerKey(key);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!customerKey) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div>
      <ProductHistory customerkey={customerKey} />
    </div>
  );
}
