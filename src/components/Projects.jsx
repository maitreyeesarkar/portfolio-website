function Projects() {
  const projects = [
    {
  title: "ReMeal – Food Donation & Redistribution Platform",
  description: "A food donation and redistribution platform that connects donors, NGOs, and volunteers to reduce food wastage. It supports surplus food listings, NGO claims, volunteer pickups, role-based access, and secure authentication.",
  technologies: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "PostgreSQL",
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "REST APIs"
  ],
  github: "https://github.com/maitreyeesarkar/ReMeal",
  demo: "YOUR_LIVE_DEMO_URL"
},
    {
  title: "Samadhan Setu",
  description: "A web-based solution developed as part of the Smart India Hackathon initiative, designed to address a real-world problem through an interactive and user-friendly interface. I contributed to the UI/UX design and frontend development of the application.",
  technologies: [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Figma"
  ],
  github: "https://github.com/itz-ashutoshjha/Samadhan-Setu.git",
  demo: "YOUR_LIVE_DEMO_URL"
},

{
  title: "Library Management System",
  description: "A library management application designed to simplify the management of books and library-related activities through a user-friendly interface. I contributed to the UI/UX design in Figma and implemented CSS styling for the application.",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "Figma"
  ],
  github: "https://github.com/maitreyeesarkar/LibraryManagementSystem.git",
  demo: "YOUR_LIVE_DEMO_URL"
},
  ];

  return (
    <section id="projects" className="projects section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">MY WORK</p>
          <h2>Projects</h2>
          <div className="heading-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;