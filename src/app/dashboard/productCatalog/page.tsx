import React from "react";
import { cookies } from "next/headers";
import ProductCatalogClientPage from "@/components/ProductCatalogClientPage";

const mockProducts = [
  {
    id: "101",
    name: "HP EliteBook 840 G9",
    description: "High-performance business laptop with Intel Core i7",
    price: 1299,
    customerId: 1,
  },
  {
    id: "102",
    name: "HP Pavilion Gaming Laptop",
    description: "Gaming laptop with NVIDIA GTX 1650 and AMD Ryzen 5",
    price: 899,
    customerId: 1,
  },
  {
    id: "103",
    name: "HP Spectre x360 14",
    description: "Premium 2-in-1 laptop with touchscreen and stylus support",
    price: 1599,
    customerId: 1,
  },
  {
    id: "104",
    name: "HP Omen 17",
    description: "High-end gaming laptop with Intel Core i9 and RTX 3080",
    price: 2499,
    customerId: 1,
  },
  {
    id: "201",
    name: "Dell XPS 13 Plus",
    description: "Ultra-portable laptop with stunning InfinityEdge display",
    price: 1199,
    customerId: 3,
  },
  {
    id: "202",
    name: "Dell Inspiron 15 3000",
    description: "Affordable laptop for everyday computing needs",
    price: 549,
    customerId: 3,
  },
  {
    id: "203",
    name: "Dell Alienware m15 R7",
    description: "Premium gaming laptop with advanced cooling system",
    price: 2199,
    customerId: 3,
  },
  {
    id: "204",
    name: "Lenovo ThinkPad X1 Carbon Gen 11",
    description: "Ultra-light premium business laptop with Intel Core i7",
    price: 1899,
    customerId: 2,
  },
  {
    id: "205",
    name: "Lenovo ThinkBook 14 G4",
    description: "Sleek business laptop with AMD Ryzen 5 and FHD screen",
    price: 799,
    customerId: 2,
  },
  {
    id: "206",
    name: "Lenovo IdeaPad 3 15",
    description: "Entry-level laptop with Intel Core i3 and 8GB RAM",
    price: 429,
    customerId: 2,
  },
  {
    id: "207",
    name: "Lenovo Legion Slim 7",
    description: "Slim gaming laptop with AMD Ryzen 9 and RTX 4070",
    price: 1799,
    customerId: 2,
  },
];

import { mockProducts } from "@/components/ProductStaticData";

async function fetchProducts(customerId: number) {
  try {
    // For now, return mock products to avoid server-client state mismatch
    // When API is ready, uncomment the fetch logic
    const products = mockProducts.filter(product => {
      // Filter products based on customer if needed
      return true;
    });
    
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return mockProducts;
  }
}

export default async function ProductCatalog() {
  const cookieStore = await cookies();
  const customerKey = cookieStore.get('session_customer')?.value || '';

  const customerId = customerKey === "globex" ? 2 : 1;
  const products = await fetchProducts(customerId);

  // Ensure products is always an array to prevent filter errors
  const safeProducts = Array.isArray(products) ? products : [];

  return <ProductCatalogClientPage customerKey={customerKey} products={safeProducts} />;
}