import React from "react";
import { cookies } from "next/headers";
import ProductCatalogClientPage from "@/components/ProductCatalogClientPage";

async function getCustomerKeyFromCookies(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get('session_customer')?.value || '';
}

export default async function ProductCatalog() {
  const customerKey = await getCustomerKeyFromCookies();

  return <ProductCatalogClientPage customerKey={customerKey} />;
}