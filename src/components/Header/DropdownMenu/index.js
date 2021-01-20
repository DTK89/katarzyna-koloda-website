import React from 'react';
import PropTypes from 'prop-types';
// import { links, social } from 'routes';
import { Dropdown, MenuContainer, MenuLink, SocialContainer, SocialLink } from './DropdownElements';

const DropdownMenu = ({
  routeLinks,
  socialLinks,
  isOpen,
  toggleDropdown,
  linksRef,
  linksContainerRef,
}) => (
  <Dropdown isOpen={isOpen} ref={linksContainerRef}>
    <MenuContainer ref={linksRef}>
      {routeLinks.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <MenuLink to={url} onClick={toggleDropdown} activeclass="active">
              {text}
            </MenuLink>
          </li>
        );
      })}
      <SocialContainer>
        {socialLinks.map((socialIcon) => {
          const { id, url, icon } = socialIcon;
          return (
            <li key={id}>
              <SocialLink href={url}>{icon}</SocialLink>
            </li>
          );
        })}
      </SocialContainer>
    </MenuContainer>
  </Dropdown>
);

DropdownMenu.propTypes = {
  routeLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  socialLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  isOpen: PropTypes.bool,
  toggleDropdown: PropTypes.func.isRequired,
  linksRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  linksContainerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

DropdownMenu.defaultProps = {
  isOpen: false,
};

export default DropdownMenu;
