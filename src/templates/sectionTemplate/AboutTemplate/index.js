import React from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/atoms/SectionTitle';
import aboutData from './data';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-primary);
  clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%);
  padding: 5rem 0 10rem 0;
`;

const SectionContainer = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: minmax(300px, 1fr) minmax(300px, 1fr);

  @media screen and (min-width: 550px) {
    grid-template-rows: minmax(300px, 2fr) minmax(300px, 1fr);
    grid-gap: 10px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
  }
`;

const BioPicture = styled.div`
  width: 100%;
  background-image: url(${({ picture }) => picture});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  border-radius: 30px;
  justify-self: center;

  @media screen and (min-width: 426px) {
    max-width: 350px;
  }

  @media screen and (min-width: 992px) {
    max-width: 500px;
    min-height: 550px;
  }
`;

const BioText = styled.p`
  font-size: 1.5rem;
  text-align: justify;
  color: white;
  margin: 0;
  align-self: center;

  @media screen and (min-width: 375px) {
    font-size: 2rem;
  }
`;

const AboutTemplate = () => (
  <Wrapper id="about">
    <SectionTitle secondary>O mnie</SectionTitle>
    <SectionContainer>
      <Content>
        <BioPicture picture={aboutData[0].photo} />
        <BioText>{aboutData[0].about}</BioText>
      </Content>
    </SectionContainer>
  </Wrapper>
);

export default AboutTemplate;
