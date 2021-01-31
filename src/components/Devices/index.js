import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import devicesData from './data';

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

  @media screen and (min-width: 992px) {
    display: grid;
    column-gap: 4rem;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

const Button = styled.div`
  align-self: center;
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.5rem;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  margin: 0.4rem 0.7rem;
  padding: 0.3rem 0;
  outline-style: none;
  cursor: pointer;

  &.active {
    color: var(--clr-primary-2);
    box-shadow: 0 2px var(--clr-primary-2);
  }

  &:hover {
    color: var(--clr-primary);
    box-shadow: 0 2px var(--clr-primary);
  }

  @media screen and (min-width: 900px) {
    font-size: 1.9rem;
    margin-bottom: 1rem;
  }
`;

const Article = styled.article`
  p {
    text-align: justify;
    font-size: 2rem;
  }

  @media screen and (min-width: 992px) {
    p {
      font-size: 2.5rem;
    }
  }
`;

const ArticleImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  float: none;
  margin: 20px 0 20px 0;

  @media screen and (min-width: 992px) {
    max-width: 40%;
    ${({ floatLeft }) =>
      floatLeft &&
      css`
        float: left;
        margin-right: 20px;
      `}

    ${({ floatRight }) =>
      floatRight &&
      css`
        float: right;
        margin-left: 20px;
      `}
  }
`;

const Devices = () => {
  const [cards] = useState(devicesData);
  const [activeIndex, setActiveIndex] = useState(0);

  const { tabs } = cards[activeIndex];
  return (
    <Wrapper id="urzadzenia">
      <Title>
        <h1>Urządzenia</h1>
        <Underline />
      </Title>
      <Container>
        {/* Button container */}
        <ButtonsWrapper>
          {cards.map((item, index) => (
            <Button
              key={item.id}
              type="button"
              className={` ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              {item.service}
            </Button>
          ))}
        </ButtonsWrapper>
        {/* Article container */}
        <div>
          {tabs.map((item) => (
            <Article key={item.id}>
              <p>
                <ArticleImage src={item.servicePic} floatRight alt="service" />
                {item.paragraph1}
              </p>
              <p>
                <ArticleImage src={item.devicePic} floatLeft alt="service" />
                {item.paragraph2}
              </p>
            </Article>
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

export default Devices;
