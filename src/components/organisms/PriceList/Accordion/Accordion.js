import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';
import Prices from '../PriceTable';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: var(--clr-trinary);
  border-radius: 10px;
`;

const Head = styled.button`
  width: 100%;
  color: var(--clr-trinary);
  background: var(--clr-primary);
  border: 2px solid var(--clr-trinary);
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  text-align: left;
  letter-spacing: 1.2px;
  font-weight: 600;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
    font-weight: 400;
    padding: 21px;
  }
`;

const Icon = styled.span`
  font-size: 1.4rem;
  transition: transform ease 500ms;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  svg {
    display: block;
  }
`;

const Body = styled.div`
  overflow: hidden;
  transition: height ease 500ms;
`;

const Accordion = ({ index, accTitle, accContent, tableOption, active, setActive }) => {
  // If active and set active is not delivered this is checkoption for opening and closing
  const [localActive, setLocalActive] = useState(false);
  // reduce two checks to one prop to pass
  const isOpen = active === index || localActive;
  // refs to Accordion main elements
  const accBodyRef = useRef(null);
  const accArrowRef = useRef(null);
  const accContentRef = useRef(null);

  useEffect(() => {
    const contentHeight = accContentRef.current.getBoundingClientRect().height;
    if (isOpen) {
      accArrowRef.current.style.transform = `rotate(-90deg)`;
      accBodyRef.current.style.height = `${contentHeight}px`;
    } else {
      accArrowRef.current.style.transform = `rotate(90deg)`;
      accBodyRef.current.style.height = `0px`;
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
    <Container>
      <Head onClick={accordionClickHandler}>
        {accTitle}
        <Icon ref={accArrowRef}>
          <IoIosArrowForward />
        </Icon>
      </Head>
      <Body ref={accBodyRef}>
        <div ref={accContentRef}>
          <Prices primary={tableOption} tableContent={accContent} />
        </div>
      </Body>
    </Container>
  );
};

Accordion.propTypes = {
  accTitle: PropTypes.string.isRequired,
  accContent: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableOption: PropTypes.bool,
  index: PropTypes.number.isRequired,
  active: PropTypes.number,
  setActive: PropTypes.func,
};

Accordion.defaultProps = {
  active: null,
  setActive: null,
  tableOption: false,
};

export default Accordion;
