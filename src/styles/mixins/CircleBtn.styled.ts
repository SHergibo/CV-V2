import { css } from 'styled-components';

interface ICircleBtn {
  bgColor: string;
  bgColorHover: string;
  width?: string;
  height?: string;
}

export const CircleBtn = ({ bgColor, bgColorHover, width = '2.5rem', height = '2.5rem' }: ICircleBtn) => css`
  width: ${width};
  height: ${height};
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${bgColor};
  color: ${({ theme }) => theme.colors.mainBlue};
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: ${bgColorHover};
    color: ${({ theme }) => theme.colors.greyOne};
  }
`;
