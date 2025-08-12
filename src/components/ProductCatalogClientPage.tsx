"use client";

import React from "react";
import { Box, Stack, TextField, Badge, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { customerThemes } from "@/utils/theme";
import ProductCard, { Product } from "@/components/ProductCard";
import { setSearchKeyword } from "@/store/slices/searchSlice";
import { makeStore } from "@/store";

const mockProducts: Product[] = [
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

interface ProductCatalogClientPageProps {
  customerKey: string;
}

export default function ProductCatalogClientPage({
  customerKey,
}: ProductCatalogClientPageProps) {
  const theme = customerThemes[customerKey ?? ""];
  const store = makeStore();
  const state = store.getState();

  const search = state.search.keyword;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setSearchKeyword(e.target.value));
  };

  const filteredProducts = mockProducts.filter((p: any) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const cartItems = state.cart.items;
  const totalItems = Object.values(cartItems).reduce(
    (sum, qty) => sum + qty,
    0
  );

  return (
    <Box sx={{ p: 3 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" sx={{ color: theme?.logoPrimaryColor }}>
          Product Catalog
        </Typography>
        <Badge
          badgeContent={totalItems}
          sx={{
            "& .MuiBadge-badge": {
              fontSize: "14px",
              height: "24px",
              minWidth: "24px",
            },
            cursor: "pointer",
            mr: 4,
          }}
        >
          <ShoppingCartIcon
            fontSize="large"
            sx={{ color: theme?.logoPrimaryColor }}
          />
        </Badge>
      </Stack>

      <TextField
        placeholder="Search products..."
        variant="outlined"
        size="small"
        value={search}
        onChange={handleSearchChange}
        sx={{
          mb: 3,
          width: "70%",
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            "& fieldset": {
              borderColor: theme?.logoPrimaryColor,
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: theme.logoPrimaryColor,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme?.logoPrimaryColor,
            },
          },
        }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 2,
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            customerKey={customerKey}
          />
        ))}
      </Box>
    </Box>
  );
}
