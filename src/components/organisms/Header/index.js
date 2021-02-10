import React, { useState, useEffect, useRef } from 'react';
import { links, social } from 'routes';
import NavBar from './Navbar';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleOpen = () => {
    if (window.innerWidth > 992) {
      setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [isOpen]);

  return (
    <>
      <NavBar routeLinks={links} socialLinks={social} isOpen={isOpen} toggleDropdown={handleOpen} />
      <DropdownMenu
        routeLinks={links}
        socialLinks={social}
        toggleDropdown={handleOpen}
        isOpen={isOpen}
        linksRef={linksRef}
        linksContainerRef={linksContainerRef}
      />
    </>
  );
};

export default Header;
