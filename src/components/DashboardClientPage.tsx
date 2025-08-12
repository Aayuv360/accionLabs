
'use client';

import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { customerThemes } from "@/utils/theme";

interface DashboardClientPageProps {
  customerKey: string;
}

export default function DashboardClientPage({ customerKey }: DashboardClientPageProps) {
  const theme = customerThemes[customerKey];
  const customerName = theme?.name ?? "Unknown Customer";
  const primaryColor = theme?.logoPrimaryColor ?? "#1976d2";

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: primaryColor }}>
        Welcome to {customerName} Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
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
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Account Info
            </Typography>
            <Typography>Customer Key: {customerKey}</Typography>
            <Typography>Theme: {customerName}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
