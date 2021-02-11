import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'components/atoms/NavLink';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 199;
  position: fixed;
  left: 0;
  transition: 0.3s ease-in-out;
  width: 100%;
  background-color: var(--clr-primary);
  display: grid;
  align-items: center;
  top: 100px;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '100px' : '-100%')};

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const MenuContainer = styled.ul`
  overflow: hidden;
  list-style-type: none;
  transition: var(--transition);
`;

const DropdownMenu = ({ routeLinks, isOpen, toggleDropdown, linksRef, linksContainerRef }) => (
  <Wrapper isOpen={isOpen} ref={linksContainerRef}>
    <MenuContainer ref={linksRef}>
      {routeLinks.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink
              dropdown="true"
              to={url}
              smooth
              duration={500}
              spy
              // exact
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
  </Wrapper>
);

DropdownMenu.propTypes = {
  routeLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  // socialLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool,
  toggleDropdown: PropTypes.func.isRequired,
  linksRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  linksContainerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

DropdownMenu.defaultProps = {
  isOpen: false,
};

export default DropdownMenu;
