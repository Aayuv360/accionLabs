"use client";

import { useEffect, useState } from "react";
import { customerThemes } from "@/utils/theme";
import ProductCatalog from "@/components/productCatalog";
import { getCustomerKeyFromCookies } from "@/lib/auth";

export default function Dashboard() {
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

  const theme = customerThemes[customerKey];

  return (
    <div>
      <ProductCatalog customerKey={customerKey} />
    </div>
  );
}