import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import './App.css';

const sections = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Education', 'Blog', 'Contact', 'Resume'];

const App = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200;
    document.querySelectorAll('section').forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <nav className="sidebar">
        {sections.map((sec) => (
          <Link key={sec} to={sec} smooth duration={500} className={activeSection === sec ? 'active' : ''}>
            {sec}
          </Link>
        ))}
      </nav>

      <main>
        <section id="Home" className="hero">
          <h1 className="pixel-font">Nikhil Raj</h1>
          <h2>
            <Typewriter words={['Web Developer', 'Data Scientist', 'MERN Stack Enthusiast']} loop cursor />
          </h2>
        </section>

        <section id="About">
          <h2>About Me</h2>
          <p>I am a third-year undergraduate pursuing a Bachelor's degree in Computer Science and Engineering at Lovely Professional University, with a current CGPA of 7.9/10.</p>
          <p>My portfolio includes RentEase, a rental website with AI integration, and an interactive Tableau dashboard analyzing mental health trends among students.</p>
        </section>

        <section id="Projects">
          <h2>Projects</h2>
          <div className="project-card">
            <img src="mental_health_project.jpg" alt="Mental Health Dashboard" />
            <h3>Mental Health Insights Among Students</h3>
            <p>Interactive Tableau dashboard analyzing mental health trends with dynamic filters and storytelling.</p>
            <a href="https://www.linkedin.com/posts/nikhil-raj-7165b5251_dataforgood-mentalhealthawareness-tableau-activity-7264875280006033409-8G7g">View Project</a>
          </div>
          <div className="project-card">
            <img src="rentease_project.jpg" alt="RentEase Rental Website" />
            <h3>RentEase - Rental Website</h3>
            <p>AI-powered MERN stack rental platform featuring advanced filtering, appointment scheduling, and secure payments.</p>
            <a href="https://lnkd.in/gNmA4qT5">View Project</a>
          </div>
          <div className="project-card">
            <img src="sustainable_energy.jpg" alt="Sustainable Energy Dashboard" />
            <h3>Sustainable Energy Trends</h3>
            <p>Excel-based dashboard analyzing global energy consumption, CO₂ emissions, and GDP growth correlations.</p>
            <a href="https://www.linkedin.com/posts/nikhil-raj-7165b5251_sustainableenergy-dataanalytics-renewableenergy-activity-7185332332202000385-ZlEC">View Project</a>
          </div>
        </section>

        <section id="Skills">
          <h2>Skills</h2>
          <div className="skill-container">
            <span className="skill">C++</span>
            <span className="skill">Java</span>
            <span className="skill">JavaScript</span>
            <span className="skill">SQL</span>
            <span className="skill">R</span>
            <span className="skill">MERN Stack</span>
            <span className="skill">Bootstrap</span>
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">Excel</span>
            <span className="skill">Tableau</span>
            <span className="skill">Problem-Solving</span>
            <span className="skill">Team Collaboration</span>
            <span className="skill">Project Management</span>
          </div>
        </section>

        <section id="Blog">
          <h2>Blog</h2>
          <div className="blog-post">
            <h3>My Journey into Web Development</h3>
            <p>Web development has always been my passion. From building my first static website using HTML & CSS to developing full-fledged MERN applications, my journey has been exciting. In this post, I’ll share my experience, challenges, and learnings along the way.</p>
          </div>
          <div className="blog-post">
            <h3>Exploring AI in Web Development</h3>
            <p>AI is revolutionizing web development. In this post, I explore how AI can be integrated into web applications and my experience implementing AI-driven property descriptions in RentEase.</p>
          </div>
          <div className="blog-post">
            <h3>Data Visualization with Tableau</h3>
            <p>Data visualization is a powerful tool. Here, I discuss how I used Tableau to create an interactive mental health dashboard and key insights derived from it.</p>
          </div>
        </section>

        <section id="Contact">
          <h2>Contact</h2>
          <p>Email: nikhilrajallen123@gmail.com</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/nikhil-raj-7165b5251">linkedin.com/in/nikhil-raj-7165b5251</a></p>
          <p>GitHub: <a href="https://github.com/itsnewcoder">github.com/itsnewcoder</a></p>
        </section>

        <section id="Resume">
          <h2>Resume</h2>
          <a href="Nikhilmicrosoftcv.pdf" download>Download Resume</a>
        </section>
      </main>
    </div>
  );
};

export default App;
