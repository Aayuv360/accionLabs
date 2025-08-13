"use client";

import React, { useMemo, useCallback } from "react";
import { Box, Stack, TextField, Badge, Typography, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { customerThemes } from "@/utils/theme";
import ProductCard, { Product } from "@/components/ProductCard";
import { setSearchKeyword } from "@/store/slices/searchSlice";
import { AppState, makeStore } from "@/store";
import { selectCartTotalItems, selectSearchKeyword } from "@/store/selectors";
import { useDispatch, useSelector } from "react-redux";

interface ProductCatalogClientPageProps {
  customerKey: string;
  products: Product[];
}

const ProductCatalogClientPage = React.memo(function ProductCatalogClientPage({
  customerKey,
  products,
}: ProductCatalogClientPageProps) {
  const theme = useMemo(() => customerThemes[customerKey ?? ""], [customerKey]);

  const dispatch = useDispatch();
  const search = useSelector(selectSearchKeyword);
  const totalItems = useSelector(selectCartTotalItems);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchKeyword(e.target.value));
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    return (products || []).filter((product) => {
      if (!product?.name) return false;
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [products, search]);

  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Sticky Header */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backgroundColor: 'white',
          borderBottom: '1px solid #e0e0e0',
          p: 3,
          pb: 2
        }}
      >
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

        {/* Sticky Search */}
        <TextField
          placeholder="Search products..."
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearchChange}
          sx={{
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
      </Box>

      {/* Scrollable Products Section */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          p: 3,
          pt: 2,
        }}
      >
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              <ProductCard
                product={product}
                customerKey={customerKey}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
});

export default ProductCatalogClientPage;