import styled from 'styled-components';

export const LinkSocial = styled.a`
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

export const NavLeftInteraction = styled.li`
  display: flex;
  align-items: center;
  height: 4.0625rem;
  padding: 0 0.9375rem;

  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.white};
        fill: none;
      }
    }
  }
`;
