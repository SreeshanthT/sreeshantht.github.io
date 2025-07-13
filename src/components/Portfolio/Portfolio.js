import React, { useState, useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import "./Portfolio.css"; // Create this for your styles if needed
import { renderToString } from "react-dom/server";
import {PORTFOLIO_PARA, portfolios, categories } from "../../constants/constants"
import PortfolioDetails from "./PortfolioDetails"; // Import the details component

// Mock data for categories and portfolios
const IMG_BASE_PATH = "https://gitlab.com/sreeshanththekkedath8/my-portfolio-react/-/raw/main/src/components"


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".portfolio-lightbox",
    });
    // Cleanup on unmount
    return () => {
      lightbox.destroy();
    };
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

// Function to open details in GLightbox
const openDetailsPopup = (portfolio) => {
    GLightbox({
        elements: [
            {
                content: `<div style="padding:24px;max-width:500px">${renderToString(<PortfolioDetails portfolio={portfolio} />)}</div>`,
            },
        ],
    }).open();
};

return (
    <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>{PORTFOLIO_PARA}</p>
                    </div>

                    <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <ul id="portfolio-flters">
                                    <li
                                    className={activeFilter === "*" ? "filter-active" : ""}
                                    onClick={() => handleFilterClick("*")}
                                    data-filter="*"
                                    >
                                    All
                                    </li>
                                    {categories.map((cat) => (
                                    <li
                                            key={cat}
                                            className={activeFilter === cat ? "filter-active" : ""}
                                            onClick={() => handleFilterClick(cat)}
                                            data-filter={`.filter-${cat}`}
                                    >
                                            {cat}
                                    </li>
                                    ))}
                            </ul>
                            </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                            {portfolios
                            .filter(
                                    (portfolio) => activeFilter === "*" || portfolio.category === activeFilter
                            )
                            .map((portfolio) => (
                                    <div
                                    key={portfolio.id}
                                    className={`col-lg-4 col-md-6 portfolio-item filter-${portfolio.category}`}
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    >
                                    <div className="portfolio-wrap">
                                            <img src={portfolio.image} className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                            <h4>{portfolio.title}</h4>
                                            <p>{portfolio.description}</p>
                                            <div className="portfolio-links">
                                                    <a href={portfolio.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={portfolio.title}>
                                                    <i className="bx bx-plus"></i>
                                                    </a>
                                                    <a
                                                        href="#"
                                                        title="More Details"
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            openDetailsPopup(portfolio);
                                                        }}
                                                    >
                                                        <i className="bx bx-link"></i>
                                                    </a>
                                            </div>
                                            </div>
                                    </div>
                                    </div>
                            ))}
                    </div>
            </div>
    </section>
);
};

export default Portfolio;