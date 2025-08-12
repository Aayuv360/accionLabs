'use client';

import ProductStaticData from "./ProductStaticData";
import Typography from '@mui/material/Typography';
import { customerThemes } from "@/utils/theme";
import { useCustomer } from "@/contexts/CustomerContext";

export default function ProductHistory() {
  const { customerKey } = useCustomer();
  const theme = customerThemes[customerKey];
 console.log("theme >>>>> :", theme);
  return (
    <div
      style={{
        border: `1px solid ${theme.primaryColor}`,
        borderRadius: 8,
        padding: 16,
        margin: "16px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* <h3>Hello, {name} </h3> */}
      
        <Typography sx={{ color: "text.secondary", fontWeight: "bold" }} variant="h6">
          Products history :
        </Typography> 
      
      <ProductStaticData />
</div>);
}
