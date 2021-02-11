import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  background-image: url(${({ bgPicture }) => bgPicture});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 900px) {
    text-align: justify;
    background-position-y: center;
  }
`;

const SlideContainer = styled.div`
  display: grid;

  @media screen and (min-width: 900px) {
    max-width: var(--max-width);
    margin: 0 auto;
    grid-template-columns: minmax(30vw, 25%) 1fr;
    align-items: center;
    padding: 0 5vw;
  }
`;

const Content = styled.div`
  padding: 7vh 5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  h1 {
    color: var(--clr-trinary);
  }

  p {
    color: var(--clr-trinary);
    font-size: 1.5rem;
    padding: 20px 0 40px 0;
  }

  @media screen and (min-width: 900px) {
    padding: 5px;
    height: 100%;
    justify-content: center;
    align-content: space-around;
    align-items: unset;
  }
`;

const Slide = ({ content }) => {
  const { image, title, description, btnLink } = content;
  return (
    <Wrapper bgPicture={image}>
      <SlideContainer>
        <Content>
          <h1>{title}</h1>
          <p>{description}</p>
          <Button secondary to={btnLink}>
            Go Visit
          </Button>
        </Content>
      </SlideContainer>
    </Wrapper>
  );
};

Slide.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    btnLink: PropTypes.string,
  }).isRequired,
};

export default Slide;
