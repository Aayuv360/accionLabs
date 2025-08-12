
'use client';

import React from "react";
import { Button } from "@mui/material";

interface DashboardActionsProps {
  primaryColor: string;
}

export default function DashboardActions({ primaryColor }: DashboardActionsProps) {
  return (
    <>
      <Button
        variant="contained"
        sx={{ mr: 2, mb: 1, backgroundColor: primaryColor }}
        href="/dashboard/productCatalog"
      >
        View Products
      </Button>
      <Button
        variant="outlined"
        sx={{ mb: 1, borderColor: primaryColor, color: primaryColor }}
        href="/dashboard/history"
      >
        Order History
      </Button>
    </>
  );
}
