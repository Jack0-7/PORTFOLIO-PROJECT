import React, { useEffect } from "react";
import "./App.css";
function App() {
  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Cleanup event listeners (important for React)
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACTS</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>ABOUT ME</h2>
        <p>
          Hi, I'm <strong>Premkumar V</strong> 👋 — a passionate and
          detail-oriented frontend developer who loves creating clean, modern,
          and responsive web applications. I enjoy bringing ideas to life using
          technologies like
          <strong> React.js</strong>, <strong>JavaScript</strong>, and
          <strong> Bootstrap</strong>.
        </p>
        <p>
          I’m currently building innovative web solutions for projects like
          <em>Pharmacy Management System</em> and <em>Weather Now</em>. I have a
          strong foundation in <strong>Java</strong> and <strong>Python</strong>
          , which helps me approach development with solid problem-solving
          skills.
        </p>
        <p>
          My goal is to keep learning, experimenting with new technologies, and
          developing apps that not only function perfectly but also provide an
          engaging user experience. 🚀
        </p>
      </section>

      <section id="skills">
        <h2>MY SKILLS</h2>
        <p className="skills-intro">
          Here are some of the technologies and tools I work with to build
          responsive and dynamic web applications.
        </p>

        <div className="skills-grid">
          <div className="skill-box html">
            <i className="fab fa-html5"></i>
            <h3>HTML</h3>
          </div>

          <div className="skill-box css">
            <i className="fab fa-css3-alt"></i>
            <h3>CSS</h3>
          </div>

          <div className="skill-box js">
            <i className="fab fa-js-square"></i>
            <h3>JavaScript</h3>
          </div>

          <div className="skill-box react">
            <i className="fab fa-react"></i>
            <h3>React.js</h3>
          </div>

          <div className="skill-box java">
            <i className="fab fa-java"></i>
            <h3>Java</h3>
          </div>

          <div className="skill-box python">
            <i className="fab fa-python"></i>
            <h3>Python</h3>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2> MY PROJECTS</h2>
        <div className="projects-grid">
          <div className="project-item">
            <img
              src="https://img.freepik.com/free-photo/young-hispanic-woman-pharmacist-smiling-confident-standing-with-arms-crossed-gesture-pharmacy_839833-7087.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Pharmacy Management System"
            />
            <div className="project-info">
              <h3>Pharmacy Management System</h3>
              <p>
                A responsive web application built using React to manage
                medicines, sales, and customers efficiently.
              </p>
            </div>
          </div>

          <div className="project-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cWVgXJ1IzLF5cFmucolNa6BU5K3Bx0iibkeHemSL2RTPiMEuZlWowfHcJZ4jNytRg88&usqp=CAU"
              alt="Weather Now App"
            />
            <div className="project-info">
              <h3>Weather Now App</h3>
              <p>
                A real-time weather forecast app using the Open-Meteo API with a
                modern React interface.
              </p>
            </div>
          </div>

          <div className="project-item">
            <img
              src="https://cdn.prod.website-files.com/606a802fcaa89bc357508cad/61701b4e166c837543d8f0ce_2_How%20To%20a%20Create%20Personal%20Portfolio%20Website.png"
              alt="Portfolio Website"
            />
            <div className="project-info">
              <h3>Personal Portfolio</h3>
              <p>
                A sleek React-based portfolio showcasing my work, skills, and
                achievements in a professional layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2> Contact Me</h2>
        <p>
          If you’d like to collaborate, discuss projects, or just say hi — feel
          free to reach out!
        </p>

        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
