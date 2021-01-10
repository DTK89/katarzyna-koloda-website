import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Slide from 'components/molecules/Slide/Slide';
import styles from './Carousel.module.scss';
import slideData from './data';

const Carousel = () => {
  const [slides] = useState(slideData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slides]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className={styles.wrapper}>
      {slides.map((slide, slideIndex) => {
        const { id, title, description, image, btnLink } = slide;

        let position = 'containerNext';
        if (slideIndex === index) {
          position = 'containerActive';
        }
        if (slideIndex === index - 1 || (index === 0 && slideIndex === slides.length - 1)) {
          position = 'containerLast';
        }

        return (
          <div key={id} className={styles[position]}>
            <Slide title={title} bgPicture={image} btnLink={btnLink}>
              {description}
            </Slide>
          </div>
        );
      })}
      <button type="button" className={styles.wrapperPrev} onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button type="button" className={styles.wrapperNext} onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
