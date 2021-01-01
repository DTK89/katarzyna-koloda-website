import React from 'react';
import IconButton from 'components/atoms/IconButton/IconButton';
import facebookIcon from 'assets/facebook.svg';
import mapPointerIcon from 'assets/mapPointer.svg';
import phoneIcon from 'assets/phone.svg';
import { ReactComponent as Logo } from 'assets/logoNoBG.svg';
import styles from './Placeholder.module.scss';

const Placeholder = () => (
  <div className={styles.placeholder}>
    <div className={styles.header}>
      <Logo className={styles.logo} />
      <h2>STRONA W BUDOWIE</h2>
      <p>Zapraszamy na:</p>
      <div>
        <IconButton href="www.katarzynakoloda@gmail.com" />
        <IconButton icon={facebookIcon} href="https://www.facebook.com/kasiakoloda" />
        <IconButton icon={mapPointerIcon} href="https://www.facebook.com/kasiakoloda" />
        <IconButton icon={phoneIcon} href="https://www.facebook.com/kasiakoloda" />
      </div>
    </div>
  </div>
);

export default Placeholder;
