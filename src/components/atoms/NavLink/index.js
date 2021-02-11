import { Link as LinkScroll } from 'react-scroll';
import styled, { css } from 'styled-components';

const NavLink = styled(LinkScroll)`
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

  ${({ dropdown }) =>
    dropdown &&
    css`
      padding: 3rem 1rem;

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
    `}
`;

export default NavLink;
