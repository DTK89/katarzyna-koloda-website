import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = ({ children }) => (
  <div className={styles.title}>
    <h1>{children}</h1>
    <div className={styles.titleUnderline}>{}</div>
  </div>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
