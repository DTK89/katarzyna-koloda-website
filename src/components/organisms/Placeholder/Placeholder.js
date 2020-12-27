import React from 'react';
import IconButton from 'components/atoms/IconButton/IconButton';
import Button from 'components/atoms/Button/Button';
import phoneIcon from 'assets/phone.svg';
import Logo from './Logo';
import LogoText from './LogoText';
import styles from './Placeholder.module.css';

const Placeholder = () => (
  <div className={styles.placeholder}>
    <div className={styles.header}>
      <Logo />
      <LogoText />
      <h2>STRONA W BUDOWIE</h2>
      <p>Zapraszamy na:</p>
      <div>
        <IconButton icon={phoneIcon} href="https://www.facebook.com/kasiakoloda" />
        <IconButton href="https://www.facebook.com/kasiakoloda" />
      </div>
      <Button href="https://www.facebook.com/kasiakoloda">Facebook</Button>
    </div>
  </div>
);

export default Placeholder;
