import React from "react";

const PortfolioDetails = ({ portfolio }) => (
  <div className="portfolio-details-popup">
    <h2>{portfolio.title}</h2>
    <img
      src={portfolio.image}
      alt={portfolio.title}
      style={{ width: "100%", marginBottom: 16 }}
    />
    <p>{portfolio.description}</p>
    {/* Add more details as needed */}
  </div>
);

export default PortfolioDetails;