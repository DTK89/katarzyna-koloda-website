import React from 'react';
// import Slide from 'components/atoms/Slide/Slide';
import Carousel from 'components/molecules/Carousel/Carousel';
import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.wrapper}>
    <Carousel />
  </div>
);

export default MainPage;
