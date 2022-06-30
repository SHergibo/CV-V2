import { css } from 'styled-components';

interface ICloseBtn {
  top: string;
  right: string;
  size: string;
  fSize: string;
}

export const CloseBtn = ({ top, right, size, fSize }: ICloseBtn) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${top};
  right: ${right};
  width: ${size};
  height: ${size};
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: ${fSize};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
`;
