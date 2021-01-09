import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, to, buttonType }) => {
  const buttonClass = buttonType ? styles.primary : styles.secondary;

  return (
    <>
      {to ? (
        <a href={to} target="_blank" className={buttonClass} rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <button type="submit" className={buttonClass}>
          {children}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string.isRequired,
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  children: 'TEST BUTTON',
  buttonType: 'primary',
};

export default Button;
