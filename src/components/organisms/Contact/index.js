import React from 'react';
import styled from 'styled-components';
import Map from './Map';
import ContactInfo from './ContactInfo';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0 10rem 0;
`;

const Title = styled.div`
  margin-bottom: 2.5rem;
  h1 {
    text-transform: uppercase;
  }
`;

const Underline = styled.div`
  width: 8rem;
  height: 0.3rem;
  background: var(--clr-primary);
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 992px) {
    width: 11rem;
    height: 0.4rem;
  }
`;

const Container = styled.div`
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

const Contact = () => (
  <Wrapper id="contact">
    <Title>
      <h1>Kontakt</h1>
      <Underline />
    </Title>
    <Container>
      <ContactInfo />
      <Map />
    </Container>
  </Wrapper>
);

export default Contact;
