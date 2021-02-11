import SectionTitle from 'components/atoms/SectionTitle';
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Accordions from 'components/organisms/AccordionList';
import data from './data';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-primary);
  clip-path: polygon(0 0, 100% 0, 100% 97%, 0 100%);
  padding: 5rem 0 10rem 0;
`;

const PriceListTemplate = () => (
  <Wrapper id="prices">
    <SectionTitle secondary>CENNIK</SectionTitle>
    <>
      <Accordions data={data} />
    </>
  </Wrapper>
);

export default PriceListTemplate;
