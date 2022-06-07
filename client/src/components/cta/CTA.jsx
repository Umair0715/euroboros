import React from 'react';
import './cta.css';

const CTA = ({ setShowContact }) => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h3>Get In Touch With Us Today & Start Exploring The Endless Possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button" onClick={() => setShowContact(true)}>Contact Us</button>
    </div>
  </div>
);

export default CTA;