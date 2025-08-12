
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { customerThemes } from "@/utils/theme";
import DashboardActions from "./DashboardActions";

interface DashboardServerPageProps {
  customerKey: string;
}

export default function DashboardServerPage({ customerKey }: DashboardServerPageProps) {
  const theme = customerThemes[customerKey];
  const customerName = theme?.name ?? "Unknown Customer";
  const primaryColor = theme?.logoPrimaryColor ?? "#1976d2";

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: primaryColor }}>
        Welcome to {customerName} Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <DashboardActions primaryColor={primaryColor} />
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
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
