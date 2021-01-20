import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

export const Nav = styled.div`
  z-index: 200;
  position: fixed;
  width: 100vw;
  top: 0;
  background: var(--clr-primary);

  @media screen and (min-width: 992px) {
    box-shadow: var(--light-shadow);
  }
`;

export const NavContainer = styled.div`
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

export const NavLogo = styled(LinkScroll)`
  height: auto;
  max-height: 10rem;
  max-width: 17rem;
  padding: 0.75rem 0;
  color: var(--clr-trinary);
  cursor: pointer;
`;

export const NavMobileButton = styled.a`
  color: var(--clr-trinary);
  font-size: 3.5rem;
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  display: flex;
  align-items: center;
  cursor: pointer;
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: none;
  list-style-type: none;
  transition: var(--transition);
  @media screen and (min-width: 992px) {
    display: flex;
  }
`;

export const NavMenuLink = styled(LinkScroll)`
  color: var(--clr-trinary);
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  display: flex;
  justify-content: center;
  padding: 3.8rem 1rem;
  cursor: pointer;

  &:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-2);
    padding: 2.8rem 1rem 4.8rem 1rem;
  }

  &.active {
    background: var(--clr-primary-5);
    color: var(--clr-primary-2);
    padding: 3.8rem 1rem;
  }
`;

export const NavSocial = styled.ul`
  display: none;
  list-style-type: none;

  @media screen and (min-width: 992px) {
    min-width: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavSocialLink = styled.a`
  height: auto;

  color: var(--clr-trinary);
  transition: var(--transition);
  cursor: pointer;

  svg {
    height: 45px;
    width: 45px;
  }

  &:hover {
    color: var(--clr-primary-5);
  }
`;
