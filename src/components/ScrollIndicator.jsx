import React from 'react';
import Scrollspy from 'react-scrollspy';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const sections = ['hero', 'about', 'projects', 'contact'];

  return (
    <div className="scroll-indicator">
      <Scrollspy
        items={sections}
        currentClassName="active"
        offset={-100}
        componentTag="ul"
      >
        {sections.map((sec) => (
          <li key={sec}>
            <a href={`#${sec}`}>{sec.charAt(0).toUpperCase() + sec.slice(1)}</a>
          </li>
        ))}
      </Scrollspy>
    </div>
  );
};

export default ScrollIndicator;
