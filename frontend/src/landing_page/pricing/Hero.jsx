import React from "react";
import PricingCard from "./PricingCard";

function Hero() {
  const pricingData = [
    {
      image: "media/images/pricing0.svg",
      title: "Free equity delivery",
      description:
        "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
    },
    {
      image: "media/images/intradayTrades.svg",
      title: "Intraday and F&O trades",
      description:
        "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
    },
    {
      image: "media/images/pricing0.svg",
      title: "Free direct MF",
      description:
        "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
    },
  ];

  return (
    <div className="container mb-5 ">
      {/* Hero Heading */}
      <div className="row mt-3 mb-5 mt-md-5 text-center">
        <h1 className="fs-2 mt-3 mt-md-5">Charges</h1>
        <h3 className="fs-4 mt-2 mb-lg-4 mb-3" style={{ color: "grey" }}>
          List of all charges and taxes
        </h3>
      </div>
      {/* Pricing Cards */}
      <div className="row justify-content-center gx-lg-2 gx-4 gy-4 mt-3">
        {pricingData.map((item, index) => (
          <PricingCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
