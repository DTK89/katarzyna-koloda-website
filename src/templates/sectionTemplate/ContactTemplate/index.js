import React from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/atoms/SectionTitle';
import ContactInfo from 'components/molecules/ContactInfo';
import Map from 'components/organisms/Map';
import { contactData } from './data';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 10rem 0;
`;

const SectionContainer = styled.div`
  width: 100%;
  padding: 5rem 2rem;
  max-width: var(--max-width);

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
`;

const ContactTemplate = () => (
  <Wrapper id="contact">
    <SectionTitle>Kontakt</SectionTitle>
    <SectionContainer>
      <ContactInfo contact={contactData[0]} />
      <Map adress={contactData[0].adress} />
    </SectionContainer>
  </Wrapper>
);

export default ContactTemplate;
