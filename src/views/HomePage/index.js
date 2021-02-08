import React from 'react';
import Placeholder from 'components/Placeholder';
import About from 'components/About';
import Contact from 'components/Contact';

import styled from 'styled-components';
import Devices from 'components/Devices';
import PriceList from 'components/PriceList';

const PageWrapper = styled.div`
  /* margin-top: 100px; */
  width: 100%;
  background: var(--clr-trinary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => (
  <PageWrapper>
    <Placeholder scrollId="home">Slide Carousel</Placeholder>
    <PriceList />

    <Devices />
    <About />
    <Contact />
  </PageWrapper>
);

export default HomePage;
