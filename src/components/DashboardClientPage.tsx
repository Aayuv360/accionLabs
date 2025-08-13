"use client";

import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { customerThemes } from "@/utils/theme";

interface DashboardClientPageProps {
  customerKey: string;
}

export default function DashboardClientPage({
  customerKey,
}: DashboardClientPageProps) {
  const theme = customerThemes[customerKey];
  const customerName = theme?.name ?? "Unknown Customer";
  const primaryColor = theme?.logoPrimaryColor ?? "#1976d2";

  const getBannerConfig = () => {
    if (customerName === "Lenovo") {
      return {
        background:
          "linear-gradient(135deg, #E60012 0%, #FF4757 50%, #FF6B7A 100%)",
        textColor: "#ffffff",
        shadowColor: "rgba(230, 0, 18, 0.3)",
      };
    } else {
      return {
        background:
          "linear-gradient(135deg, #0096D6 0%, #00B4D8 50%, #90E0EF 100%)",
        textColor: "#ffffff",
        shadowColor: "rgba(0, 150, 214, 0.3)",
      };
    }
  };

  const bannerConfig = getBannerConfig();

  return (
    <Box sx={{ p: 0 }}>
      <Box
        sx={{
          background: bannerConfig.background,
          borderRadius: 3,
          p: 6,
          mb: 4,
          mx: 3,
          mt: 3,
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 8px 32px ${bannerConfig.shadowColor}`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Grid container alignItems="center" spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  color: bannerConfig.textColor,
                  fontWeight: 700,
                  mb: 1,
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                Welcome to {customerName}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: bannerConfig.textColor,
                  opacity: 0.9,
                  fontSize: "1.1rem",
                  maxWidth: "600px",
                }}
              >
                Discover our latest business solutions and premium laptops{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ px: 3 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  transform: "translateY(-2px)",
                },
                height: 210,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: primaryColor, fontWeight: 600 }}
              >
                Quick Actions
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: primaryColor,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: primaryColor,
                      opacity: 0.9,
                      transform: "translateY(-1px)",
                      boxShadow: `0 6px 20px ${bannerConfig.shadowColor}`,
                    },
                  }}
                  href="/dashboard/productCatalog"
                >
                  View Products Catalog
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: "none",
                    borderWidth: 2,
                    "&:hover": {
                      borderWidth: 2,
                      backgroundColor: `${primaryColor}10`,
                      transform: "translateY(-1px)",
                    },
                  }}
                  href="/dashboard/history"
                >
                  Order History
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  transform: "translateY(-2px)",
                },
                height: 210,
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: primaryColor, fontWeight: 600 }}
              >
                Account Information
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontWeight: 500 }}
                  >
                    Organization
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {customerName}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontWeight: 500 }}
                  >
                    Account Status
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, color: "#4caf50" }}
                  >
                    Active
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
