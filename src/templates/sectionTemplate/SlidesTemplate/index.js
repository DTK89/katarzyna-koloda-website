import React from 'react';
import styled from 'styled-components';
import Slider from 'components/organisms/Slider';
import slidesData from './data';

const Wrapper = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* padding: 5rem 0 10rem 0; */
`;

const SlidesTemplate = () => (
  <Wrapper>
    <Slider slides={slidesData} />
  </Wrapper>
);

export default SlidesTemplate;
