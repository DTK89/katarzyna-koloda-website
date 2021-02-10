import React from 'react';
import styled from 'styled-components';
import { contactData } from './data';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  grid-template-rows: 40px 60px 40px 40px 50px;

  @media screen and (min-width: 992px) {
    padding: 30px 0;
    grid-gap: 10px;
    grid-template-rows: 70px 90px 50px 50px 50px;
    justify-content: start;
  }
`;

const Title = styled.div`
  align-self: start;
  h2 {
    margin: 10px 10px 5px 10px;
  }
`;

const ContactItem = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
  grid-template-columns: 40px 200px;
  @media screen and (min-width: 992px) {
    grid-template-columns: 40px 1fr;
  }
`;

const AdressWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const IconWrapper = styled.a`
  height: auto;
  max-height: 5rem;
  max-width: 5rem;
  color: var(--clr-primary);
`;

const TextWrapper = styled.p`
  font-size: 1.9rem;
  margin: 0;

  @media screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;

const ContactInfo = () => (
  <Wrapper>
    <Title>
      <h2>Modelowanie Sylwetki</h2>
      <h2>Katarzyna Kołoda</h2>
    </Title>
    <ContactItem>
      <IconWrapper href={contactData[0].adress.link}>{contactData[0].adress.icon}</IconWrapper>
      <AdressWrapper>
        <TextWrapper>{contactData[0].adress.text1}</TextWrapper>
        <TextWrapper>{contactData[0].adress.text2}</TextWrapper>
      </AdressWrapper>
    </ContactItem>
    <ContactItem>
      <IconWrapper>{contactData[0].phone.icon}</IconWrapper>
      <TextWrapper>{contactData[0].phone.text}</TextWrapper>
    </ContactItem>
    <ContactItem>
      <IconWrapper>{contactData[0].mail.icon}</IconWrapper>
      <TextWrapper>{contactData[0].mail.text}</TextWrapper>
    </ContactItem>
    <ContactItem>
      <IconWrapper href={contactData[0].facebook.link}>{contactData[0].facebook.icon}</IconWrapper>
      <TextWrapper>{contactData[0].facebook.text}</TextWrapper>
    </ContactItem>
  </Wrapper>
);

export default ContactInfo;
