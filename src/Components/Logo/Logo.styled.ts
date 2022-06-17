import styled from 'styled-components';

export const LogoContainer = styled.div`
  outline: none;
  a {
    position: relative;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      width: 1.875rem;
      height: 1.875rem;
      top: 50%;
      margin-top: -0.9375rem;
      background: ${({ theme }) => theme.colors.blue};
      left: 0.1875rem;
      border-radius: 50%;
      z-index: 0;
    }
    span {
      position: relative;
      color: ${({ theme }) => theme.colors.greyOne};
      font-weight: 700;
      font-size: 1.3rem;
      transition: color 0.2s ease-in-out;
    }
    &:focus {
      outline-style: none;
      box-shadow: none;
      border-color: transparent;
    }
    &:focus-visible {
      span {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;
