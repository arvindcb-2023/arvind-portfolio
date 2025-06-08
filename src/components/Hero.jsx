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
        className="text-center p-4"
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '12px',
        }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>I'm Arvind, a Full Stack Developer</p>
      </div>
    </section>
  );
};

export default Hero;
