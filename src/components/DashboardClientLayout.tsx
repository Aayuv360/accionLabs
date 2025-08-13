
'use client';

import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { customerThemes } from "../utils/theme";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

type Props = {
  children: ReactNode;
  customerKey: string;
};

export default function DashboardClientLayout({ children, customerKey }: Props) {
  const pathname = usePathname();

  const theme = customerThemes[customerKey];
  const customerName = theme?.name ?? "";
  const primaryColor = theme?.logoPrimaryColor ?? "#1976d2";
  const logoUrl = theme?.logoUrl ?? "";

  const navLinks = [
    {
      href: "/dashboard/productCatalog",
      label: "Products Catalog",
      icon: <Inventory2OutlinedIcon fontSize="small" />,
    },
    {
      href: "/dashboard/history",
      label: "Order History",
      icon: <HistoryOutlinedIcon fontSize="small" />,
    },
    {
      href: "/logout",
      label: "Logout",
      icon: <LogoutOutlinedIcon fontSize="small" />,
      danger: true,
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          backgroundColor: "#f5f5f5",
          borderRight: "1px solid #e0e0e0",
          padding: "20px",
        }}
      >
        <div style={{ marginBottom: "30px", textAlign: "center" }}>
          {logoUrl && (
            <Link href="/dashboard" style={{ textDecoration: "none" }}>
              <img
                src={logoUrl}
                alt={customerName}
                style={{ 
                  height: "40px", 
                  marginBottom: "10px",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease"
                }}
                onMouseOver={(e) => ((e.target as HTMLImageElement).style.opacity = "0.8")}
                onMouseOut={(e) => (e.target as HTMLImageElement).style.opacity = "1"}
              />
            </Link>
          )}
          {/* <h3 style={{ color: primaryColor, margin: 0 }}>{customerName}</h3> */}
        </div>

        <nav>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 16px",
                margin: "8px 0",
                textDecoration: "none",
                color: pathname === link.href ? primaryColor : "#666",
                backgroundColor: pathname === link.href ? "#f0f0f0" : "transparent",
                borderRadius: "8px",
                fontWeight: pathname === link.href ? "600" : "normal",
              }}
            >
              <span style={{ marginRight: "12px" }}>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}
