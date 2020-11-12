import React from 'react';
import './Placeholder.css';
import Logo from './Logo'
import LogoText from './LogoText'

const Placeholder = () => {
  return (
    <div className="Placeholder">
      <div className="Placeholder-header">
          <Logo />
          <LogoText />
        <h2>
          STRONA W BUDOWIE
        </h2>
        <p>
          Zapraszamy na:
        </p>
        <a
          className="Placeholder-link"
          href="https://www.facebook.com/kasiakoloda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </div>
  );
}

export default Placeholder;
