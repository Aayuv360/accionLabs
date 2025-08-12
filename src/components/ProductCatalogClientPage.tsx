"use client";

import React from "react";
import { Box, Stack, TextField, Badge, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { customerThemes } from "@/utils/theme";
import ProductCard, { Product } from "@/components/ProductCard";
import { setSearchKeyword } from "@/store/slices/searchSlice";
import { AppState, makeStore } from "@/store";
import { useDispatch, useSelector } from "react-redux";

interface ProductCatalogClientPageProps {
  customerKey: string;
  products: Product[];
}

export default function ProductCatalogClientPage({
  customerKey,
  products,
}: ProductCatalogClientPageProps) {
  const theme = customerThemes[customerKey ?? ""];

 const dispatch = useDispatch();
  const search = useSelector((state: AppState) => state.search.keyword);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchKeyword(e.target.value));
  };

  const filteredProducts = products.filter((p: any) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const cartItems = useSelector((state: AppState) => state.cart.items);
  const totalItems = Object.values(cartItems).reduce(
    (sum, qty) => sum + qty,
    0
  );

  return (
    <Box sx={{ p: 3,height:'100vh',overflowY:'auto'}}>
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
