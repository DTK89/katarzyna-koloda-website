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
        rel="noopener noreferrer"
        className={styles.button}
        style={{ backgroundImage: `url(${icon})` }}
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
  href: PropTypes.string,
  icon: PropTypes.string,
};

IconButton.defaultProps = {
  href: 'www.google.com',
  icon: envelopeIcon,
};

export default IconButton;
