import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import Slide from '../Slide';
import Dots from '../Dots';
import ArrowButton from '../ArrowsButton';

const Wrapper = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (min-width: 992px) {
    height: 60vh;
  }
`;

const SlideContainer = styled.div`
  height: 100%;
  min-width: 100%;
  transform: translateX(${({ translate }) => translate});
  transition: 1s;
`;
// to extract to separate component
// const ArrowBtn = styled.button`
//   position: absolute;
//   top: 0;
//   width: 5%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: var(--clr-trinary);
//   background: none;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   transition: 0.5s;

//   &:hover {
//     background: rgba(0, 0, 0, 0.356);
//   }

//   ${({ left }) =>
//     left &&
//     css`
//       left: 0px;
//     `}

//   ${({ right }) =>
//     right &&
//     css`
//       right: 0px;
//     `}
// `;
// // to extract to separate component
// const Icon = styled.span`
//   font-size: 1.4rem;
//   transition: transform ease 500ms;

//   @media screen and (min-width: 768px) {
//     font-size: 3rem;
//   }

//   svg {
//     display: block;
//   }
// `;

const Slider = ({ slides }) => {
  const [slideState, setSlideState] = useState({
    activeSlide: 0,
    xTranslate: 0,
  });

  const { activeSlide, xTranslate } = slideState;

  const nextSlide = () =>
    setSlideState({
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
      xTranslate: xTranslate === -100 * (slides.length - 1) ? 0 : xTranslate - 100,
    });

  const prevSlide = () =>
    setSlideState({
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
      xTranslate: xTranslate === 0 ? -100 * (slides.length - 1) : xTranslate + 100,
    });

  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [xTranslate]);

  return (
    <Wrapper>
      {slides.map((slide) => (
        <SlideContainer key={slide.id} translate={`${xTranslate}%`}>
          <Slide content={slide} />
        </SlideContainer>
      ))}
      <ArrowButton left onClick={prevSlide} />
      <ArrowButton right onClick={nextSlide} />
      {/* <ArrowBtn left onClick={prevSlide}>
        <Icon>
          <IoIosArrowBack />
        </Icon>
      </ArrowBtn>
      <ArrowBtn right onClick={nextSlide}>
        <Icon>
          <IoIosArrowForward />
        </Icon>
      </ArrowBtn> */}

      <Dots slides={slides} activeSlide={activeSlide} />
    </Wrapper>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Slider;
