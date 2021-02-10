import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Wrapper = styled.button`
  position: absolute;
  top: 0;
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-trinary);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: rgba(0, 0, 0, 0.356);
  }

  ${({ left }) =>
    left &&
    css`
      left: 0px;
    `}

  ${({ right }) =>
    right &&
    css`
      right: 0px;
    `}
`;
// to extract to separate component
const Icon = styled.span`
  font-size: 1.4rem;
  transition: transform ease 500ms;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }

  svg {
    display: block;
  }
`;

const ArrowButton = ({ left, right, onClick }) => (
  <Wrapper left={left} right={right} onClick={onClick}>
    <Icon>
      {left && <IoIosArrowBack />}
      {right && <IoIosArrowForward />}
    </Icon>
  </Wrapper>
);

ArrowButton.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ArrowButton.defaultProps = {
  left: false,
  right: false,
};

export default ArrowButton;
