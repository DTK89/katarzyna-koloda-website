import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background: var(--clr-trinary);
  border-radius: 10px;
  position: relative;
  transition-property: height;
  transition-timing-function: linear;
  transition-duration: 400ms;
`;

// kept for test purpose
// const SubContainer = styled.div`
//   width: 100%;
//   max-width: var(--max-width);
//   margin: auto;
// `;

const Head = styled.div`
  z-index: 10;
  color: var(--clr-trinary);
  background-color: var(--clr-primary);
  border: 2px solid var(--clr-trinary);
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  p {
    /* letter-spacing: 1.2px;
    font-weight: 600; */
  }
`;

const AccTitle = styled.div`
  font-size: 1.6rem;
  padding: 23px 50px 23px 22px;
  margin-bottom: 0;
  letter-spacing: 1.2px;
  font-weight: 600;
  @media screen and (min-width: 992px) {
    font-size: 2rem;
    padding: 21px 50px 21px 22px;
  }
`;

const Icon = styled.span`
  position: absolute;
  font-size: 1.5rem;
  top: 50%;
  right: 17px;
  margin-top: -12px;
  transition-property: transform;
  transition-timing-function: ease;
  transition-duration: 400ms;
  transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '0deg')});

  svg {
    display: block;
  }
`;

const Body = styled.div`
  /* position: relative; */
  top: -10px;
  border: 2px solid var(--clr-trinary);
  overflow: hidden;
  z-index: 2;
  background: var(--clr-trinary);
  border-radius: 0 0 7px 7px;
  padding: 20px 10px 10px 10px;
  transition: visibility 1000ms linear 100ms;
  transition: transform 500ms linear 50ms;

  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  /* display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; */ //kept for test purpose
  /* visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')}; */ //kept for test purpose

  p {
    overflow: hidden;
  }
`;

const Accordion = ({ index, accTitle, accContent, active, setActive }) => {
  // If active and set active is not delivered this is checkoption for opening and closing
  const [localActive, setLocalActive] = useState(false);
  // reduce two checks to one prop to pass
  const isOpen = active === index || localActive;
  // refs to Accordion main elements
  const accContainerRef = useRef(null);
  const accHeadRef = useRef(null);
  const accContentRef = useRef(null);

  useEffect(() => {
    const headHeight = accHeadRef.current.getBoundingClientRect().height;
    const contentHeight = accContentRef.current.getBoundingClientRect().height;
    if (isOpen) {
      accContainerRef.current.style.height = `${headHeight + contentHeight}px`;

      // accContentRef.current.style.opacity = '1'; // Problems with smooth work on that seting. Option moved to Body styling
      accContentRef.current.style.transition = `opacity 100ms linear`;
      accContentRef.current.style.transform = `translateY(-10px)`;
      accContentRef.current.style.visibility = 'visible';
    } else {
      accContainerRef.current.style.height = `${headHeight}px`;

      // accContentRef.current.style.opacity = '0'; // Problems with smooth work on that seting. Option moved to Body styling
      accContentRef.current.style.transition = `opacity 150ms linear 500ms`;
      accContentRef.current.style.transform = `translateY(-${contentHeight}px)`;
      accContentRef.current.style.visibility = 'collapse';
    }
  }, [isOpen]);

  const globalCloseAccHandler = () => {
    setActive(null);
  };

  const globalOpenAccHandler = () => {
    setActive(index);
  };

  const accordionClickHandler = () => {
    if (setActive === null) {
      setLocalActive(!localActive);
    } else if (active === index) {
      globalCloseAccHandler();
    } else {
      globalOpenAccHandler();
    }
  };

  return (
    <div>
      <Container ref={accContainerRef}>
        <Head ref={accHeadRef} onClick={accordionClickHandler} isOpen={isOpen}>
          <AccTitle>{accTitle}</AccTitle>
          <Icon isOpen={isOpen}>
            <IoIosArrowForward />
          </Icon>
        </Head>
        <Body ref={accContentRef} isOpen={isOpen}>
          <div>{accContent}</div>
        </Body>
      </Container>
    </div>
  );
};

Accordion.propTypes = {
  accTitle: PropTypes.string.isRequired,
  accContent: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.number,
  setActive: PropTypes.func,
};

Accordion.defaultProps = {
  active: null,
  setActive: null,
};

export default Accordion;
