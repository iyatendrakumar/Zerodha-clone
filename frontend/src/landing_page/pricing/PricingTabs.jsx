import React from 'react';
import { useState } from "react";
import Tab from './Tab';

function PricingTabs() {
  const [activeTab, setActiveTab] = useState("equity");

  const pricingData = {
  equity: {
    headers: [
      "",
      "Equity delivery",
      "Equity intraday",
      "F&O - Futures",
      "F&O - Options",
    ],
    rows: [
      {
        label: "Brokerage",
        values: [
          "Zero Brokerage",
          "0.03% or ₹20",
          "0.03% or ₹20",
          "Flat ₹20 per executed order",
        ],
      },
      {
        label: "STT / CTT",
        values: [
          "0.1% on buy & sell",
          "0.025% on sell side",
          "0.02% on sell side",
          "• 0.125% on intrinsic value\n• 0.1% on sell side",
        ],
      },
      {
        label: "Transaction charges",
        values: [
          "NSE: 0.00297%\nBSE: 0.00375%",
          "NSE: 0.00297%\nBSE: 0.00375%",
          "NSE: 0.00173%\nBSE: 0",
          "NSE: 0.03503%\nBSE: 0.0325%",
        ],
      },
    ],
  },

  currency: {
    headers: ["", "Currency futures", "Currency options"],
    rows: [
      {
        label: "Brokerage",
        values: ["0.03% or ₹20", "₹20 per order"],
      },
      {
        label: "STT / CTT",
        values: ["No STT", "No STT"],
      },
      {
        label: "Transaction charges",
        values: [
          "NSE: 0.00035%\nBSE: 0.00045%",
          "NSE: 0.0311%\nBSE: 0.001%",
        ],
      },
    ],
  },

  commodity: {
    headers: ["", "Commodity futures", "Commodity options"],
    rows: [
      {
        label: "Brokerage",
        values: ["0.03% or ₹20", "₹20 per order"],
      },
      {
        label: "STT / CTT",
        values: ["0.01% sell side", "0.05% sell side"],
      },
      {
        label: "Transaction charges",
        values: [
          "MCX: 0.0021%\nNSE: 0.0001%",
          "MCX: 0.0418%\nNSE: 0.001%",
        ],
      },
    ],
  },
};


  const table = pricingData[activeTab];

  return (
    <div className="container mt-5">
      {/* Tabs */}
      <div className="d-flex gap-4 border-bottom">
        <Tab label="Equity" value="equity" activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab label="Currency" value="currency" activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab label="Commodity" value="commodity" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
<p className="mt-3">Active tab: {activeTab}</p>
      {/* Table */}
      <div className="border rounded-1 mt-4">
        <table className="table mb-0 align-middle">
          <thead className="border-bottom text-muted">
            <tr>
              {table.headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i}>
                <td className="text-muted fw-medium">{row.label}</td>
                {row.values.map((val, j) => (
                  <td key={j}>
                    {val.split("\n").map((line, k) => (
                      <div key={k}>{line}</div>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PricingTabs;