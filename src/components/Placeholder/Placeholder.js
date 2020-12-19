import React from 'react';
import styles from './Placeholder.module.css';
import Logo from './Logo';
import LogoText from './LogoText';

const Placeholder = () => (
  <div className={styles.placeholder}>
    <div className={styles.header}>
      <Logo />
      <LogoText />
      <h2>STRONA W BUDOWIE</h2>
      <p>Zapraszamy na:</p>
      <a
        className={styles.link}
        href="https://www.facebook.com/kasiakoloda"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
    </div>
  </div>
);

export default Placeholder;
