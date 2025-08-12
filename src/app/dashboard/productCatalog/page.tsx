import React from "react";
import { cookies } from "next/headers";
import ProductCatalogClientPage from "@/components/ProductCatalogClientPage";

function getCustomerKeyFromCookies(): string {
  const cookieStore = cookies();
  return cookieStore.get('session_customer')?.value || '';
}

export default function ProductCatalog() {
  const customerKey = getCustomerKeyFromCookies();

  return <ProductCatalogClientPage customerKey={customerKey} />;
}