import React from 'react';
import styled from 'styled-components';
import NavigationTemplate from 'templates/NavigationTemplate';
import Slides from 'components/organisms/Slides';
import PriceList from 'components/organisms/PriceList';
import Devices from 'components/organisms/Devices';
import About from 'components/organisms/About';
import Contact from 'components/organisms/Contact';

const PageWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  background: var(--clr-trinary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => (
  <NavigationTemplate>
    <PageWrapper>
      <Slides />
      <PriceList />
      <Devices />
      <About />
      <Contact />
    </PageWrapper>
  </NavigationTemplate>
);

export default HomePage;
