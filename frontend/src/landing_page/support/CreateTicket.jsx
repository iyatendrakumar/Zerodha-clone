import React from "react";

function CreateTicket() {
    const ticketData = [
  {
    title: "Account Opening",
    links: [
      "Online account opening",
      "Offline account opening",
      "Company, partnership and HUF account opening",
      "NRI account opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 account",
      "Getting started",
    ],
  },
  {
    title: "Your Zerodha Account",
    links: [
      "Login credentials",
      "Account modification and segment addition",
      "DP ID and bank details",
      "Your Profile",
      "Account closure",
    ],
  },
  {
    title: "Trading and Markets",
    links: [
      "Trading FAQs",
      "Kite features",
      "Margins",
      "Product and order types",
      "Corporate actions",
      "Kite user manual",
    ],
  },
  {
    title: "Funds",
    links: [
      "Adding funds",
      "Withdrawing funds",
      "Funds transfer",
      "Pledge and unpledge",
      "Funds statement",
    ],
  },
  {
    title: "Console",
    links: [
      "Reports",
      "Ledger",
      "Portfolio",
      "Tax reports",
      "Corporate actions",
    ],
  },
  {
    title: "Coin",
    links: [
      "Understanding mutual funds",
      "Coin app",
      "Investing in mutual funds",
      "Statements and reports",
      "FAQs",
    ],
  },
];

  return (
    <div className="container mt-5 mb-5">
  <h1 className="fs-2 mb-4">
    To create a ticket, select a relevant topic
  </h1>

  <div className="row">
    {ticketData.map((section, index) => (
      <div key={index} className="col-md-4 px-4 py-3">
        <h4 className="mb-3">
          <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
          {section.title}
        </h4>

        <div className='ps-4'>
            {section.links.map((link, i) => (
              <div key={i}>
                <a
                  href="/"
                  onClick={(e) => e.preventDefault()}
                  style={{ textDecoration: "none", lineHeight: "1.9" }}
                >
                  {link}
                </a>
              </div>
            ))}
        </div>
      </div>
    ))}
  </div>
</div>


  );
}

export default CreateTicket;