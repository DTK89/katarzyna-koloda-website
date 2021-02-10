import React, { memo } from 'react';
// import{ css, jsx } from '@emotion/core'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.span`
  padding: 5px;
  margin-right: 8px;
  /* cursor: pointer; */
  border-radius: 50%;
  background: ${({ active }) => (active ? 'var(--clr-primary)' : 'var(--clr-trinary)')};
`;

const MemoDot = memo(Dot);

const Dots = ({ slides, activeSlide }) => (
  <Wrapper>
    {slides.map((slide, i) => (
      <MemoDot key={slide.id} active={activeSlide === i} />
    ))}
  </Wrapper>
);

Dots.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeSlide: PropTypes.number.isRequired,
};

export default Dots;
