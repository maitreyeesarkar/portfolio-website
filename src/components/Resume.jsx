function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">MY RESUME</p>
          <h2>Resume</h2>
          <div className="heading-line"></div>
        </div>

        <div className="resume-content">

          <div className="resume-icon">
            📄
          </div>

          <h3>Want to know more about me?</h3>

          <p>
            Take a look at my resume to learn more about my education,
            skills, projects, training and achievements.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View Resume ↗
          </a>

        </div>

      </div>
    </section>
  );
}

export default Resume;