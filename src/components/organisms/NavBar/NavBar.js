import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logoNoBG.svg';
import { FaBars, FaPlus } from 'react-icons/fa';
import { links, social } from 'routes';
import styles from './NavBar.module.scss';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    if (window.innerWidth > 1000) {
      setShowLinks(false);
    } else {
      setShowLinks(!showLinks);
    }
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <nav className={styles.nav}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Logo className={styles.logo} />
          <button
            type="button"
            className={showLinks ? styles.navToggleActive : styles.navToggle}
            onClick={toggleLinks}
          >
            {/* <FaBars /> */}
            {showLinks ? <FaPlus /> : <FaBars />}
          </button>
        </div>
        <div className={styles.linksWrapper} ref={linksContainerRef}>
          <ul className={styles.links} ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <>
                  <li key={id}>
                    <NavLink
                      exact
                      to={url}
                      className={styles.linksItem}
                      onClick={toggleLinks}
                      activeClassName={styles.linksItemActive}
                    >
                      {text}
                    </NavLink>
                  </li>
                </>
              );
            })}
            <li key={6} className={styles.linksSocial}>
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <div key={id}>
                    <a href={url} target="_blank" rel="noopener noreferrer" onClick={toggleLinks}>
                      {icon}
                    </a>
                  </div>
                );
              })}
            </li>
          </ul>
        </div>
        <ul className={styles.social}>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
