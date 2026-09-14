function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-content">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Portfolio<span>.</span>
            </a>

            <p>
              Building, learning and growing through technology.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-socials">
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

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;