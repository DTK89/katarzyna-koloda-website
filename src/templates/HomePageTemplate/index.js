import React from 'react';
import styled from 'styled-components';
import NavigationTemplate from 'templates/NavigationTemplate';
import SlidesSection from 'templates/sectionTemplate/SlidesTemplate';
import PriceListSection from 'templates/sectionTemplate/PriceListTemplate';
import TreatmentSection from 'templates/sectionTemplate/TreatmentSection';
import AboutSection from 'templates/sectionTemplate/AboutTemplate';
import ContactSection from 'templates/sectionTemplate/ContactTemplate';

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
      <SlidesSection />
      <PriceListSection />
      <TreatmentSection />
      <AboutSection />
      <ContactSection />
    </PageWrapper>
  </NavigationTemplate>
);

export default HomePage;
