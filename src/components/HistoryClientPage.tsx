
'use client';

import React from "react";
import { Box, Typography } from "@mui/material";
import { customerThemes } from "@/utils/theme";
import ProductHistory from "@/components/ProductHistory";

interface HistoryClientPageProps {
  customerKey: string;
}

export default function HistoryClientPage({ customerKey }: HistoryClientPageProps) {
  const theme = customerThemes[customerKey];

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ color: theme?.logoPrimaryColor }}
      >
        Order History
      </Typography>
      <ProductHistory customerKey={customerKey} />
    </Box>
  );
}
