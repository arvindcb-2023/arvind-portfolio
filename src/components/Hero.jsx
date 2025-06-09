/*import React from 'react';

const Hero = () => {
  return (
    <div className="bg-image text-white d-flex justify-content-center align-items-center vh-100" style={{
      backgroundImage: "url('/images/DSC_5219.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="text-center bg-dark bg-opacity-50 p-4 rounded">
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">I'm Arvind, a Full Stack Developer</p>
        <a href="#projects" className="btn btn-primary mt-3">View Projects</a>
      </div>
    </div>
  );
};

export default Hero;*/
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center text-white"
      style={{
        height: '100vh',
        backgroundImage: "url('/images/cover.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
      }}
    >
      <div
        className="p-4"
        style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          transform: 'translateY(-50%)',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '12px',
          color: 'white',
          textAlign: 'justify',
          maxWidth: '35%',
        }}
      >
        <h1>Hi, I'm Arvind!</h1>
        <p>A Computer Science Master's graduate specializing in machine learning and cloud-based applications, with experience developing
web solutions, AI/ML pipelines, and deploying big data analytics on cloud platforms. Passionate about impactful technology
for healthcare and education.</p>
        <a
          href="/Arvind-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
