function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">GET IN TOUCH</p>
          <h2>Contact Me</h2>
          <div className="heading-line"></div>
        </div>

        <div className="contact-content">

          <div className="contact-text">
            <h3>Let's connect!</h3>

            <p>
              I'm always open to discussing new opportunities,
              projects, internships and collaborations.
            </p>
          </div>

          <div className="contact-info">

            <a href="mailto:maitreyeesarkar2004@gmail.com" className="contact-item">
              <span className="contact-icon">✉</span>
              <div>
                <span>Email</span>
                <strong>maitreyeesarkar2004@gmail.com</strong>
              </div>
            </a>

            <a
              href="https://github.com/maitreyeesarkar"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">⌘</span>
              <div>
                <span>GitHub</span>
                <strong>github.com/maitreyeesarkar</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/maitreyee-sarkar-8297b3294?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">in</span>
              <div>
                <span>LinkedIn</span>
                <strong>linkedin.com/in/maitreyee-sarkar-8297b3294</strong>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;