import React from "react";
import UniverseCard from "./UniverseCard";

function Universe() {
  const universeData = [
    {
      image: "media/images/zerodhaFundhouse.png",
      width: "70%",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "media/images/sensibullLogo.svg",
      width: "75%",
      description:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      image: "media/images/tijori.svg",
      width: "50%",
      description:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      image: "media/images/streakLogo.png",
      width: "60%",
      description:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      image: "media/images/smallcaseLogo.png",
      width: "70%",
      description:
        "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      image: "media/images/dittoLogo.png",
      width: "50%",
      description:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h3 className="text-muted mb-3">The zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        {universeData.map((item, index) => (
          <UniverseCard
            key={index}
            image={item.image}
            width={item.width}
            description={item.description}
          />
        ))}

        <button className="p-2 btn btn-primary fs-5 mt-5 mb-5" style={{width: "20%", margin: "0 auto"}}
        >
            Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
