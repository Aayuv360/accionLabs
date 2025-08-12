import React from "react";
import {
  Box,
  Stack,
  TextField,
  Badge,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { customerThemes } from "@/utils/theme";
import ProductCard, { Product } from "@/components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setSearchKeyword } from "@/store/slices/searchSlice";
import { AppState, wrapper } from "@/store";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const mockProducts: Product[] = [
  {
    id: "101",
    name: "HP Spectre x360 14",
    description: "2-in-1 premium laptop with Intel Evo i7 and OLED display",
    price: 1399,
    oldPrice: 1599,
    customerId: 1,
  },
  {
    id: "102",
    name: "HP ENVY x360 15",
    description: "Convertible laptop with AMD Ryzen 7 and touchscreen",
    price: 899,
    oldPrice: 999,
    customerId: 1,
  },
  {
    id: "103",
    name: "HP Pavilion 15",
    description: "Affordable everyday laptop with Intel Core i5 13th Gen",
    price: 679,
    oldPrice: 749,
    customerId: 1,
  },
  {
    id: "104",
    name: "HP Omen 16",
    description: "Powerful gaming laptop with Intel i7 and RTX 4060 GPU",
    price: 1599,
    oldPrice: 1799,
    customerId: 1,
  },
  {
    id: "105",
    name: "HP Victus 15",
    description: "Budget gaming laptop with AMD Ryzen 5 and GTX 1650",
    price: 699,
    customerId: 1,
  },

  {
    id: "201",
    name: "Lenovo Yoga 9i Gen 8",
    description:
      "Premium 2-in-1 convertible with Intel Core i7 and OLED display",
    price: 1399,
    oldPrice: 1599,
    customerId: 2,
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

export default function productCatalog({}) {

  if (!customerKey) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const theme = customerThemes[customerKey ?? ""];
  const dispatch = useDispatch();
  const search = useSelector((state: AppState) => state.search.keyword);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchKeyword(e.target.value));
  };

  const filteredProducts = mockProducts.filter((p: any) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const cartItems = useSelector((state: AppState) => state.cart.items);
  console.log(cartItems)
  const totalItems = Object.values(cartItems).reduce(
    (sum, qty) => sum + qty,
    0
  );
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          bgcolor: "#fff",
          py: 1,
          px: 3,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
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

        <Typography variant="body2" sx={{ mt: 1, ml: 1 }}>
          Showing {filteredProducts.length} products
        </Typography>
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          p: 3,
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {filteredProducts.map((product: any) => (
            <div key={product.id}>
              <ProductCard product={product} customerKey={customerKey} />
            </div>
          ))}
        </div>
      </Box>
    </>
  );
}
