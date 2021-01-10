import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import styles from './Slide.module.scss';

const Slide = ({ title, children, bgPicture, btnLink }) => (
  <div className={styles.wrapper} style={{ backgroundImage: `url(${bgPicture})` }}>
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <h1>{title}</h1>
        <p>{children}</p>
        <Button to={btnLink} className={styles.slideContentBtn}>
          Go Visit
        </Button>
      </div>
    </div>
  </div>
);

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  bgPicture: PropTypes.string.isRequired,
  btnLink: PropTypes.string.isRequired,
};

export default Slide;
