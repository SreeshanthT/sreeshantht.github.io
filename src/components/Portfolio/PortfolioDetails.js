import React from "react";

const PortfolioDetails = ({ portfolio }) => (
  <div className="portfolio-details-popup">
    <h2>{portfolio.title}</h2>
    <div className="row">
      <div className="col-lg-12">
        <img
        src={portfolio.image}
        alt={portfolio.title}
        style={{ width: "100%", marginBottom: 16 }}
      />
      </div>
      <div className="col-lg-12">
        <p>{portfolio.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>

    {portfolio.other_images.map((image, index) => (
      <div
      key={index}
      className={`col-lg-4 col-md-6 portfolio-item`}
      data-aos="fade-up"
      data-aos-delay="300"
      >
        <div className="portfolio-wrap">
          <img src={image} className="img-fluid" alt="" />
        </div>
      </div>
    ))}
  </div>
);

export default PortfolioDetails;