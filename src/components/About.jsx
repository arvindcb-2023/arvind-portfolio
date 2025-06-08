import React from 'react';
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';

const skills = [
  { name: 'React', icon: <FaReact size={30} /> },
  { name: 'Python', icon: <FaPython size={30} /> },
  { name: 'HTML5', icon: <FaHtml5 size={30} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={30} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={30} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={30} /> },
  { name: 'Node.js', icon: <FaNodeJs size={30} /> },
  { name: 'Git', icon: <FaGitAlt size={30} /> },
];

const About = () => {
  return (
    <section
        id="about"
        className="w-100 text-white"
        style={{ backgroundColor: '#1a1a1a', padding: '4rem 1rem', minHeight: '100vh' }}
    >
      <div className="container" style={{ maxWidth: '960px' }}>
        <h2 className="text-center mb-5">About Me</h2>

        <div className="row g-4">
          {/* Introduction Card */}
          <div className="col-md-6">
            <div className="card bg-dark text-white h-100 shadow-sm p-3">
              <h5 className="card-title">Introduction</h5>
              <p className="card-text">
                I’m Arvind, a graduate student specializing in multi-omics data analysis,
                machine learning, and full-stack development. I enjoy blending data science with web
                technology to create impactful tools and models.
              </p>
            </div>
          </div>

          {/* Skills Card */}
          <div className="col-md-6">
            <div className="card bg-dark text-white h-100 shadow-sm p-3">
              <h5 className="mb-3">Skills</h5>
              <div className="row row-cols-3 row-cols-sm-4 g-3 text-center">
                {skills.map((skill, index) => (
                  <div key={index} className="col d-flex flex-column align-items-center">
                    <div className="bg-secondary bg-opacity-25 p-2 rounded-circle mb-1">
                      {skill.icon}
                    </div>
                    <small>{skill.name}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What I'm Looking For Card */}
          <div className="col-md-6">
            <div className="card bg-dark text-white h-100 shadow-sm p-3">
              <h5 className="card-title">What I’m Looking For</h5>
              <p className="card-text">
                I’m seeking opportunities in data science, full-stack development, or bioinformatics research where I can apply both analytical and creative thinking to real-world challenges.
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="col-md-6">
            <div className="card bg-dark text-white h-100 shadow-sm p-3">
              <h5 className="card-title">Education</h5>
              <ul className="list-unstyled mb-0">
                <li><strong>Lakehead University</strong><br />
                  M.Sc. in Computer Science<br />
                  <small>2023 – 2025</small>
                </li>
                <li className="mt-3"><strong>SBOA School & Junior College</strong><br />
                  Bachelor’s in Computer Science<br />
                  <small>2019 – 2022</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
