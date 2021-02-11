import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
`;

const Underline = styled.div`
  width: 8rem;
  height: 0.3rem;
  background: var(${({ secondary }) => (secondary ? '--clr-trinary' : '--clr-primary')});
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 992px) {
    width: 11rem;
    height: 0.4rem;
  }
`;

const SectionTitle = ({ secondary, children }) => (
  <>
    <Title>{children}</Title>
    <Underline secondary={secondary} />
  </>
);

SectionTitle.propTypes = {
  secondary: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

SectionTitle.defaultProps = {
  secondary: false,
};

export default SectionTitle;
