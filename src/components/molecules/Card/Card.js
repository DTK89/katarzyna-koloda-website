import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import styles from './Card.module.scss';

const Card = ({ title, description, image }) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperImage} style={{ backgroundImage: `url(${image})` }}>
      {}
    </div>
    <div className={styles.wrapperInner}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button>WIĘCEJ</Button>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  // btnLink: PropTypes.string.isRequired,
};

export default Card;
