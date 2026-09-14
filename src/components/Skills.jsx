function Skills() {
  return (
    <section id="skills" className="skills section">

      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-subtitle">WHAT I WORK WITH</p>

          <h2>
            My <span>Skills</span>
          </h2>

          <div className="heading-line"></div>
        </div>


        {/* Skills Grid */}
        <div className="skills-grid">


          {/* Programming */}
          <div className="skill-card">

            <div className="skill-number">
              01
            </div>

            <h3>
              Programming
            </h3>

            <p>
              Languages and programming fundamentals.
            </p>

            <div className="skill-list">
              <span>Java</span>
              <span>Python</span>
              <span>C</span>
            </div>

          </div>


          {/* Frontend */}
          <div className="skill-card">

            <div className="skill-number">
              02
            </div>

            <h3>
              Frontend Development
            </h3>

            <p>
              Building responsive and interactive interfaces.
            </p>

            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React.js</span>
            </div>

          </div>


          {/* Backend */}
          <div className="skill-card">

            <div className="skill-number">
              03
            </div>

            <h3>
              Backend Development
            </h3>

            <p>
              Developing APIs and server-side applications.
            </p>

            <div className="skill-list">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST APIs</span>
            </div>

          </div>


          {/* Database */}
          <div className="skill-card">

            <div className="skill-number">
              04
            </div>

            <h3>
              Database
            </h3>

            <p>
              Working with relational and application databases.
            </p>

            <div className="skill-list">
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
            </div>

          </div>


          {/* Tools */}
          <div className="skill-card">

            <div className="skill-number">
              05
            </div>

            <h3>
              Tools & Version Control
            </h3>

            <p>
              Tools used for development and collaboration.
            </p>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Figma</span>
            </div>

          </div>


          {/* UI/UX */}
          <div className="skill-card">

            <div className="skill-number">
              06
            </div>

            <h3>
              UI / UX Design
            </h3>

            <p>
              Designing clean and user-friendly interfaces.
            </p>

            <div className="skill-list">
              <span>Figma</span>
              <span>Wireframing</span>
              <span>Prototyping</span>
            </div>

          </div>


        </div>

      </div>

    </section>
  );
}

export default Skills;