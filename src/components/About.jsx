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
  FaJava,
  FaAws,
  FaDocker,
  FaRProject,
  FaLinux,
} from 'react-icons/fa';
import { SiMongodb, SiMysql, SiFirebase, SiApachehadoop, SiApachespark, SiTensorflow, SiGooglecloud, /*SiAmazonaws*/ } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={30} /> },
  { name: 'Python', icon: <FaPython size={30} /> },
  { name: 'Java', icon: <FaJava size={30} /> },
  { name: 'C++', icon: <FaGitAlt size={30} /> }, // Optional custom icon for C++
  { name: 'HTML5', icon: <FaHtml5 size={30} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={30} /> },
  { name: 'JavaScript', icon: <FaJsSquare size={30} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={30} /> },
  { name: 'Node.js', icon: <FaNodeJs size={30} /> },
  { name: 'Git', icon: <FaGitAlt size={30} /> },
  { name: 'MongoDB', icon: <SiMongodb size={30} /> },
  { name: 'MySQL', icon: <SiMysql size={30} /> },
  { name: 'Firebase', icon: <SiFirebase size={30} /> },
  { name: 'Docker', icon: <FaDocker size={30} /> },
  { name: 'Hadoop', icon: <SiApachehadoop size={30} /> },
  { name: 'Spark', icon: <SiApachespark size={30} /> },
  { name: 'TensorFlow', icon: <SiTensorflow size={30} /> },
  { name: 'AWS', icon: <FaAws size={30} /> },
  { name: 'GCP', icon: <SiGooglecloud size={30} /> },
  { name: 'R', icon: <FaRProject size={30} /> },
  { name: 'Shell', icon: <FaLinux size={30} /> },
];



const About = () => {
  return (
    <section
        id="about"
        className="w-100 text-white"
        style={{ backgroundColor: '#1a1a1a', padding: '4rem 1rem', minHeight: '100vh' }}
    >
      <div className="container">
        <h2 className="text-center mb-7">About Me</h2>

        <div className="row g-2">
          {/* Introduction Card */}
          <div className="col-md-6">
            <div className="card bg-dark text-white h-100 shadow-sm p-3">
              <h5 className="card-title">Introduction</h5>
              <div className="d-flex flex-lg-row flex-column align-items-start align-items-lg-center">
                <img
                  src="/images/DSC_5173.jpg"
                  alt="Arvind"
                  className="img-fluid me-lg-4 mb-3 mb-lg-0 d-none d-lg-block"
                  style={{ width: '60%', height: '60%', borderRadius: '50%' }}
                /> 

                {/* Text */}
                <p className="card-text">
                  I’m Arvind, a graduate student specializing in multi-omics data analysis,
                  machine learning, and full-stack development. I enjoy blending data science with web
                  technology to create impactful tools and models.
                </p>
              </div>
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
                I’m seeking opportunities in data science, full-stack development, or bioinformatics research
                where I can apply both analytical and creative thinking to real-world challenges.
              </p>
            </div>
          </div>

          {/* Soft Skills Card (was Education) */}
          <div className="col-md-6">
            <div className="card bg-dark text-white h-100 shadow-sm p-3">
              <h5 className="card-title">Soft Skills</h5>
              <ul className="list-unstyled mb-0">
                <li>🧠 Critical Thinking</li>
                <li>🤝 Team Collaboration</li>
                <li>🗣️ Communication</li>
                <li>⏱️ Time Management</li>
                <li>📚 Self-Motivation</li>
              </ul>
            </div>
          </div>

          {/* Education Card with 2 rows inside one card */}
          <div className="col-12">
            <div className="card bg-dark text-white h-100 shadow-sm p-3">
              <h5 className="card-title">Education</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <strong>Lakehead University - Thunder Bay, ON, Canada</strong><br />
                  MS in Computer Science (Thesis)<br />
                  <small>2023 - 2025</small>
                </div>
                <div className="col-md-6 mb-3">
                  <strong>Vellore Institute of Technology - Chennai, Tamil Nadu, India</strong><br />
                  B.Tech in Computer Science and Engineering<br />
                  <small>2019 - 2023</small>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
