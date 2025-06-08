import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
        id="contact"
        className="w-100 text-white"
        style={{ backgroundColor: '#0f0f0f', padding: '4rem 1rem', minHeight: '100vh' }}
    >

      <div className="container" style={{ maxWidth: '960px' }}>
        <h2 className="text-center mb-5">Contact Me</h2>

        <div className="row g-4">
          {/* Left Column */}
          <div className="col-md-6">
            <div className="bg-dark p-4 rounded shadow-sm h-100">
              <h5>Get in Touch</h5>
              <p><FaEnvelope className="me-2" /> arvind@example.com</p>
              <p><FaPhoneAlt className="me-2" /> +1 (234) 567-8901</p>
              <p><FaMapMarkerAlt className="me-2" /> Thunder Bay, Ontario, Canada</p>

              <div className="mt-4 d-flex gap-3">
                <a href="https://github.com/arvindcb-2023" target="_blank" rel="noreferrer" className="text-light">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/arvindcb" target="_blank" rel="noreferrer" className="text-light">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-md-6">
            <div className="bg-dark p-4 rounded shadow-sm h-100">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control bg-light border-0" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control bg-light border-0" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control bg-light border-0" id="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-outline-light w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Contact;
