import "../Portfolio/Portfolio.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const ResumeViewer = () => {
  const openDetailsPopup = () => {
    GLightbox({
      elements: [
        {
          content: `
            <div style="width:100vw;max-width:100%;height:100vh;display:flex;align-items:center;justify-content:center;">
              <iframe 
                src="${require("./SreeshanthThekkedath.pdf")}" 
                style="width:100%;height:100%;border:none;"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
          `
        }
      ]
    }).open();
  };

  return (
    <div className="row portfolio" data-aos="fade-up" data-aos-delay="200">
      <div className="resume-item">
        <div
          className={"portfolio-item"}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="portfolio-wrap">
            <img
              src={require("../../img/resume/ResumeThumb.png")}
              className="resume-image"
              alt="Resume Thumbnail"
            />
            <div className="portfolio-info">
              <div className="portfolio-links">
                <a
                  href="#"
                  title="View Resume PDF"
                  onClick={e => {
                    console.log("clicked");
                    e.preventDefault();
                    openDetailsPopup();
                  }}
                >
                  <i className="bx bx-link"></i>
                </a>
                <a
                  href={require("./SreeshanthThekkedath.pdf")}
                  download="SreeshanthThekkedath.pdf"
                  title="Download Resume PDF"
                  style={{ marginLeft: "10px" }}
                >
                  <i className="bx bx-download"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;