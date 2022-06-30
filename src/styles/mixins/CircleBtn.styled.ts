import { css } from 'styled-components';

interface ICircleBtn {
  color: string;
  colorHover: string;
  width?: string;
  height?: string;
}

export const CircleBtn = ({ color, colorHover, width = '2.5rem', height = '2.5rem' }: ICircleBtn) => css`
  width: ${width};
  height: ${height};
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color};
  color: ${({ theme }) => theme.colors.mainBlue};
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: ${colorHover};
    color: ${({ theme }) => theme.colors.greyOne};
  }
`;
