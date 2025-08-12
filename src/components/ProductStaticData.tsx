import React from "react";

const products = [
  {
    name: "Spectre pro x360",
    category: "Ultrabook",
    price: "$4,999",
    availability: "In Stock",
  },
  {
    name: "Spectre x360",
    category: "ProBook",
    price: "$2999",
    availability: "In Stock",
  },
  {
    name: "Spectre probook yoga x360",
    category: "ProBook",
    price: "$2099",
    availability: "In Stock",
  },
  {
    name: "Spectre build Pro x360",
    category: "ProBook",
    price: "$3999",
    availability: "In Stock",
  },
  {
    name: "Spectre yoga x360",
    category: "Ultrabook pro",
    price: "$1999",
    availability: "In Stock",
  },
];

export default function ProductStaticData() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ccc",
        }}
      >
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={{ padding: 8, border: "1px solid #ccc" }}>Product</th>
            <th style={{ padding: 8, border: "1px solid #ccc" }}>Category</th>
            <th style={{ padding: 8, border: "1px solid #ccc" }}>Price</th>
            <th style={{ padding: 8, border: "1px solid #ccc" }}>
              Availability
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td style={{ padding: 8, border: "1px solid #ccc" }}>{product.name}</td>
              <td style={{ padding: 8, border: "1px solid #ccc" }}>{product.category}</td>
              <td style={{ padding: 8, border: "1px solid #ccc" }}>{product.price}</td>
              <td style={{ padding: 8, border: "1px solid #ccc" }}>
                <span
                  style={{
                    background: "#d1fae5",
                    color: "#065f46",
                    padding: "4px 10px",
                    borderRadius: 999,
                    fontSize: 12,
                  }}
                >
                  {product.availability}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
