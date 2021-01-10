import React from 'react';
import Carousel from 'components/organisms/Carousel/Carousel';
import Tabs from 'components/organisms/Tabs/Tabs';
import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.wrapper}>
    <Carousel />
    <Tabs />
  </div>
);

export default MainPage;
