import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slide from 'components/molecules/Slide';
import Dots from 'components/molecules/Dots';
import ArrowButton from 'components/molecules/ArrowButton';

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

      <Dots slides={slides} activeSlide={activeSlide} />
    </Wrapper>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Slider;