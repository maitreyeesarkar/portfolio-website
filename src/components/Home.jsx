function Home() {
  return (
    <section id="home" className="home">
      <div className="home-container">

        {/* Left Side */}
        <div className="home-content">

          <p className="home-greeting">
            Hello, I'm
          </p>

          <h1>
            Maitreyee Sarkar
          </h1>

          <h2>
            Computer Science Engineering Student | Aspiring Full Stack Developer | Open Source Enthusiast
          </h2>

          <p className="home-description">
            I am a passionate developer interested in building
            modern, user-friendly and impactful web applications.
            I enjoy learning new technologies and turning ideas
            into real-world projects.
          </p>

          {/* Buttons */}
          <div className="home-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://github.com/maitreyeesarkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/maitreyee-sarkar-8297b3294?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </div>

        {/* Right Side */}
        <div className="home-image-container">

          <div className="image-glow"></div>

          <div className="profile-image">
            <div className="profile-placeholder">
  <img src="/profile.jpeg" alt="Profile" />
</div>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Home;