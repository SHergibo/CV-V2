import styled from 'styled-components';
import { Wrapper } from '../../styles/components/Layout.styled';

interface IMainMenuProp {
  mainMenufixed: boolean;
}

export const MainMenu = styled.div<IMainMenuProp>`
  background-color: ${({ theme }) => theme.colors.mainBlue};
  border-bottom: ${({ theme }) => theme.css.border};
  position: ${({ mainMenufixed }) => (mainMenufixed ? 'fixed' : 'absolute')};
  top: ${({ mainMenufixed }) => (mainMenufixed ? '0' : 'unset')};
  left: 0;
  right: 0;
  bottom: ${({ mainMenufixed }) => (mainMenufixed ? 'unset' : '0')};
  z-index: 100;
`;

export const ContainerNav = styled(Wrapper)`
  padding: 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.9375rem;
    text-transform: none;
    text-decoration: none;
    font-weight: 700;
    height: 4.0625rem;
    width: 100%;
  }

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    .container-nav {
      padding: 0;
    }
  }
`;

interface IMenuProps {
  menuTop: boolean;
  displayMenu: boolean;
}

export const Menu = styled.nav<IMenuProps>`
  position: absolute;
  top: ${({ menuTop }) => (menuTop ? '5rem' : '-25.6rem')};
  left: 0;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  width: 100%;
  border-bottom: ${({ theme }) => theme.css.border};
  border-top: ${({ theme }) => theme.css.border};
  display: ${({ displayMenu }) => (displayMenu ? 'block' : 'none')};
  a {
    color: ${({ theme }) => theme.colors.greyOne};
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.greyTwo};
    }
  }

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    top: -8.2rem;
  }

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    display: flex;
    justify-content: center;
    border: none;
    position: unset;
    top: unset;
  }
`;

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    width: 100%;
    &:focus {
      outline-style: none;
      box-shadow: none;
      border-color: transparent;
    }
    &:focus-visible {
      a {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    flex-direction: row;
    justify-content: center;
    li {
      width: auto;
    }
  }
`;

export const SocialNavContainer = styled.div`
  padding-bottom: 1.25rem;
  ul {
    display: flex;
    justify-content: center;
  }

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    padding: 0;
  }

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    ul {
      justify-content: unset;
    }
  }
`;

export const BurgerMenu = styled.div`
  svg {
    height: 1.875rem;
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
`;
