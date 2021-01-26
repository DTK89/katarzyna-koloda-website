import React from 'react';
import PersonPhoto from 'assets/photos/About.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-primary);
  clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%);
  padding: 10rem 0;
`;

const AboutContainer = styled.div`
  width: 90vw;
  max-width: var(--max-width);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  align-self: center;
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

const About = () => (
  <Wrapper id="about">
    <AboutContainer>
      <Title>O MNIE</Title>
      <Content>
        <BioPicture picture={PersonPhoto} />
        <BioText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </BioText>
      </Content>
    </AboutContainer>
  </Wrapper>
);

export default About;
