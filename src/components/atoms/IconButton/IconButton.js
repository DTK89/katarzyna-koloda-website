import React from 'react';
import PropTypes from 'prop-types';
import envelopeIcon from 'assets/envelope.svg';
import styles from './IconButton.module.scss';

const IconButton = ({ href, icon }) => (
  <>
    {href ? (
      <a
        href={href}
        target="_blank"
        className={styles.button}
        style={{ backgroundImage: `url(${icon})` }}
        rel="noopener noreferrer"
      >
        {}
      </a>
    ) : (
      <button type="button" className={styles.button} style={{ backgroundImage: `url(${icon})` }}>
        {}
      </button>
    )}
  </>
);

IconButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

IconButton.defaultProps = {
  icon: envelopeIcon,
};

export default IconButton;
