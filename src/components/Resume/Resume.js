// Resume.js
import ResumeViewer from "./ResumeViewer";

const Resume = () => {

  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Explore my professional journey, including my education, work experience, and key skills that have shaped my career as software engineer.
          </p>
        </div>
        <ResumeViewer />
      </div>
    </section>
  );
}

export default Resume;