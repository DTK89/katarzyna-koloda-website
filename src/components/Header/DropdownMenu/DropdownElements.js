import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';

export const Dropdown = styled.div`
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

export const MenuContainer = styled.ul`
  overflow: hidden;
  list-style-type: none;
  transition: var(--transition);
`;

export const MenuLink = styled(LinkScroll)`
  color: var(--clr-trinary);
  font-size: 2.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;
  cursor: pointer;

  &:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-2);
    padding: 3rem 1rem;
  }

  &.active {
    background: var(--clr-primary-5);
    color: var(--clr-primary-2);
    padding: 3rem 1rem;
  }
`;

export const SocialContainer = styled.ul`
  list-style-type: none;
  max-width: 20rem;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  /* height: auto; */

  color: var(--clr-trinary);
  transition: var(--transition);
  cursor: pointer;

  svg {
    height: 55px;
    width: 55px;
  }

  &:hover {
    color: var(--clr-primary-5);
  }
`;
