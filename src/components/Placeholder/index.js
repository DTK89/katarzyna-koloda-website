import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LogoIcon } from 'assets/logo/logo.svg';
import styled from 'styled-components';

const PlaceholderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  /* z-index: 49; */
  /* max-width: var(--max-width); */
  background: var(${({ secondary }) => (secondary ? '--clr-primary' : '--clr-trinary')});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px red;

  /* /* width: 100%; */
  /* position: relative; */
  /* margin-top: 150px; */
  /* height: 300px; */
  /* padding: 20px; */
  clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%);
  padding: 10rem;
`;

export const Logo = styled.div`
  height: auto;
  max-height: 30rem;
  max-width: 51rem;
  padding: 0.75rem 0;
  color: var(--clr-trinary);
  cursor: pointer;
`;

const Placeholder = ({ children, scrollId, secondary }) => (
  <PlaceholderWrapper secondary={secondary} id={scrollId}>
    <Logo>
      <LogoIcon />
    </Logo>
    <h1>{children}</h1>
  </PlaceholderWrapper>
);

Placeholder.propTypes = {
  children: PropTypes.string.isRequired,
  scrollId: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};

Placeholder.defaultProps = {
  secondary: false,
};

export default Placeholder;
