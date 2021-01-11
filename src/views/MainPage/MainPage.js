import React from 'react';
import Carousel from 'components/organisms/Carousel/Carousel';
import Tabs from 'components/organisms/Tabs/Tabs';
import About from 'components/organisms/About/About';
import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.wrapper}>
    <Carousel />
    <Tabs />
    <About />
  </div>
);

export default MainPage;
