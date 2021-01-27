import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';
import { ReactComponent as LogoIcon } from 'assets/logo/logo.svg';
import { FaArrowCircleDown } from 'react-icons/fa';
// import { links, social } from 'routes';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMobileButton,
  NavMenu,
  NavMenuLink,
  NavSocial,
  NavSocialLink,
} from './NavbarElements';

const NavBar = ({ routeLinks, socialLinks, isOpen, toggleDropdown }) => {
  const scrollHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/" onClick={scrollHome}>
          <LogoIcon />
        </NavLogo>
        <NavMenu>
          {routeLinks.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <NavMenuLink
                  to={url}
                  duration={500}
                  spy
                  smooth
                  // exact
                  offset={-70} // -100 withowuth sked option
                  onClick={toggleDropdown}
                  activeclass="active"
                >
                  {text}
                </NavMenuLink>
              </li>
            );
          })}
        </NavMenu>
        <NavSocial>
          {socialLinks.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <NavSocialLink href={url}>{icon}</NavSocialLink>
              </li>
            );
          })}
        </NavSocial>
        <NavMobileButton isOpen={isOpen} onClick={toggleDropdown}>
          <FaArrowCircleDown />
        </NavMobileButton>
      </NavContainer>
    </Nav>
  );
};
NavBar.propTypes = {
  routeLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  socialLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool,
  toggleDropdown: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  isOpen: false,
};

export default NavBar;
