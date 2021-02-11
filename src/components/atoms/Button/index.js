import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  border: 1px solid var(--clr-grey-3);
  background-color: var(--clr-primary);
  width: 105px;
  height: 30px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-size: 10px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: var(--clr-primary);
      font-weight: 600;
      font-size: 16px;
      width: 220px;
      height: 47px;
    `}
`;

export default Button;
