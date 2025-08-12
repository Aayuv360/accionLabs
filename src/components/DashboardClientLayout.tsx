
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
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "system-ui, sans-serif",
        background: "#fafafa",
      }}
    >
      <aside
        style={{
          width: 240,
          padding: "30px 20px",
          background: "#fff",
          borderRight: "1px solid #e0e0e0",
          boxSizing: "border-box",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <img
            src={logoUrl}
            alt={`${customerName} Logo`}
            style={{ maxWidth: "100%", height: 60, objectFit: "contain" }}
          />
        </div>
        <nav style={{ flex: 1 }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 14px",
                borderRadius: 8,
                marginBottom: 10,
                color: pathname === link.href ? primaryColor : "#333",
                textDecoration: "none",
                fontWeight: 500,
                transition: "all 0.3s ease",
                gap: 10,
              }}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          marginTop: "16px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
