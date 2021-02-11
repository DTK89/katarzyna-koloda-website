import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll';
import { ReactComponent as LogoIcon } from 'assets/logo/logo.svg';
import { FaArrowCircleDown } from 'react-icons/fa';
import NavLink from 'components/atoms/NavLink';

const Wrapper = styled.div`
  z-index: 200;
  position: fixed;
  width: 100vw;
  top: 0;
  background: var(--clr-primary);

  @media screen and (min-width: 992px) {
    box-shadow: var(--light-shadow);
  }
`;

const NavContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: var(--transition);

  @media screen and (min-width: 992px) {
    padding: 0 2rem;
  }
`;

const Logo = styled(LinkScroll)`
  height: auto;
  max-height: 10rem;
  max-width: 17rem;
  padding: 0.75rem 0;
  color: var(--clr-trinary);
  cursor: pointer;
`;

const MenuContainer = styled.ul`
  display: none;
  list-style-type: none;
  transition: var(--transition);
  @media screen and (min-width: 992px) {
    display: flex;
  }
`;

const MobileButton = styled.button`
  color: var(--clr-trinary);
  font-size: 3.5rem;
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const NavBar = ({ routeLinks, isOpen, toggleDropdown }) => {
  const scrollHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Wrapper>
      <NavContainer>
        <Logo to="/" onClick={scrollHome}>
          <LogoIcon />
        </Logo>
        <MenuContainer>
          {routeLinks.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  duration={500}
                  spy
                  smooth
                  offset={-100}
                  onClick={toggleDropdown}
                  activeclass="active"
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </MenuContainer>
        <MobileButton isOpen={isOpen} onClick={toggleDropdown}>
          <FaArrowCircleDown />
        </MobileButton>
      </NavContainer>
    </Wrapper>
  );
};
NavBar.propTypes = {
  routeLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool,
  toggleDropdown: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  isOpen: false,
};

export default NavBar;
