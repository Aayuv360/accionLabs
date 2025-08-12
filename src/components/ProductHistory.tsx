
import ProductStaticData from "./ProductStaticData";
import Typography from '@mui/material/Typography';
import { customerThemes } from "@/utils/theme";

export default function ProductHistory({customerKey}:any) {
  const theme = customerThemes[customerKey];
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
     
        {/* <Typography sx={{ color: "text.secondary", fontWeight: "bold" }} variant="h6">
          Products history :
        </Typography>  */}
      
      <ProductStaticData />
</div>);
}
