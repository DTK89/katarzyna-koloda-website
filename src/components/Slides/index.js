import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import slidesData from './data';

const Wrapper = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* padding: 5rem 0 10rem 0; */
`;

const Slides = () => (
  <Wrapper>
    <Slider slides={slidesData} />
  </Wrapper>
);

export default Slides;
