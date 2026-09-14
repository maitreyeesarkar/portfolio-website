function About() {
  return (
    <section id="about" className="about section">

      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-subtitle">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <div className="heading-line"></div>
        </div>


        {/* About Content */}
        <div className="about-content">

          {/* Left Side */}
          <div className="about-visual">

            <div className="about-box">

              <div className="about-icon">
                &lt;/&gt;
              </div>

              <h3>
                CSE Student
              </h3>

              <p>
                Learning. Building. Growing.
              </p>

            </div>

          </div>


          {/* Right Side */}
          <div className="about-text">

            <h3>
              A little bit about me
            </h3>

            <p>
              I am a Computer Science Engineering student with
              an interest in software development and modern web
              technologies.
            </p>

            <p>
              I enjoy creating websites and applications that are
              simple, useful and easy to use. I am continuously
              improving my programming and development skills
              through projects and hands-on learning.
            </p>

            <p>
              My current focus is on strengthening my development
              fundamentals and preparing myself for opportunities
              in the software industry.
            </p>


            {/* Quick Information */}
            <div className="about-info">

              <div className="info-item">
                <span>Education</span>
                <strong>B.Tech in CSE</strong>
              </div>

              <div className="info-item">
                <span>Focus</span>
                <strong>Software Development</strong>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;