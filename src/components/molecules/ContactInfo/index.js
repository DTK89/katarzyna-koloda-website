import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  grid-template-rows: 60px 60px 40px 40px 50px;

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
    margin: 0 10px 5px 10px;
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

const Icon = styled.a`
  height: auto;
  max-height: 5rem;
  max-width: 5rem;
  color: var(--clr-primary);

  svg {
    display: block;
  }
`;

const Text = styled.p`
  margin: 0;
`;

const ContactInfo = ({ contact }) => (
  <Wrapper>
    <Title>
      <h2>Modelowanie Sylwetki</h2>
      <h2>Katarzyna Kołoda</h2>
    </Title>
    <ContactItem>
      <Icon href={contact.adress.link}>{contact.adress.icon}</Icon>
      <>
        <Text>
          {contact.adress.line1}
          <br />
          {contact.adress.line2}
        </Text>
      </>
    </ContactItem>
    <ContactItem>
      <Icon>{contact.phone.icon}</Icon>
      <Text>{contact.phone.line1}</Text>
    </ContactItem>
    <ContactItem>
      <Icon>{contact.mail.icon}</Icon>
      <Text>{contact.mail.line1}</Text>
    </ContactItem>
    <ContactItem>
      <Icon href={contact.facebook.link}>{contact.facebook.icon}</Icon>
      <Text>{contact.facebook.line1}</Text>
    </ContactItem>
  </Wrapper>
);

ContactInfo.propTypes = {
  contact: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ContactInfo;
