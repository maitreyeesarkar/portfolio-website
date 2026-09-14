function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo / Name */}
        <a href="#home" className="logo">
          Portfolio<span>.</span>
        </a>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Resume Button */}
        <a href="#resume" className="nav-resume">
          Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;