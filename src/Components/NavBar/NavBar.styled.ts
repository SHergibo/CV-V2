import styled, { css } from 'styled-components';

const MenuInteractionSvg = () => css`
  svg {
    height: 1.25rem;
    path {
      fill: ${({ theme }) => theme.colors.greyOne};
      transition: 0.2s ease-in-out;
    }
    &:hover {
      path {
        fill: ${({ theme }) => theme.colors.greyTwo};
      }
    }
  }

  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    svg {
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const LinkSocial = styled.a`
  ${MenuInteractionSvg}
`;

export const NavLeftInteraction = styled.li`
  ${MenuInteractionSvg}
`;
