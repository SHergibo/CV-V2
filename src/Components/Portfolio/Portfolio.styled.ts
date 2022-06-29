import styled from 'styled-components';
import { Wrapper } from '../../styles/components/Layout.styled';

export const PortfolioContainer = styled.div`
  border-bottom: ${({ theme }) => theme.css.border};
`;

export const WrapperPortfolio = styled(Wrapper)`
  display: flex;
  position: relative;
  padding: 0 0.9375rem;
  flex-direction: column;

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    padding: 0;
  }
`;

export const Projects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 3.75rem 0;
`;

export const ProjectsPorfolio = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    justify-content: flex-start;
  }
`;

export const ProjectCardName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  padding: 0.1875rem 9px;
  border-top-right-radius: 7px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.125rem;
  font-weight: bold;
  z-index: 5;
  transition: color ease-in-out 0.2s;
`;

export const ProjectCardMore = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.625rem;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  transition: opacity ease-in-out 0.5s;
  div {
    width: 6.25rem;
    display: flex;
    justify-content: space-between;
    button,
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.8125rem;
      height: 2.8125rem;
      background-color: ${({ theme }) => theme.colors.blue};
      border: none;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.white};
      transition: background-color ease-in-out 0.2s;
      cursor: pointer;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.colors.white};
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.blueHover};
      }
    }
  }
`;

export const ProjectCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 18.75rem;
  height: 12.5rem;
  margin: 0.625rem;
  border-radius: 7px;
  border-bottom-left-radius: 0;
  cursor: pointer;
  -webkit-box-shadow: 0px 15px 36px -11px hsla(0, 0%, 0%, 0.5);
  -moz-box-shadow: 0px 15px 36px -11px hsla(0, 0%, 0%, 0.5);
  box-shadow: 0px 15px 36px -11px hsla(0, 0%, 0%, 0.5);
  img {
    height: inherit;
    transform: scale(1.2);
    transition: transform ease-in-out 0.2s;
  }

  &:hover {
    ${ProjectCardName} {
      color: ${({ theme }) => theme.colors.blue};
    }
    ${ProjectCardMore} {
      opacity: 1;
    }
    img {
      transform: scale(1.1, 1.1);
    }
  }
`;

export const PortfolioPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
`;

export const PortfolioActionPagination = styled.div`
  display: flex;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 0 0.3rem;
    font-size: 2.5rem;
    cursor: pointer;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.3rem;
    color: ${({ theme }) => theme.colors.white};

    input {
      width: 1.8rem;
      height: 1.9rem;
      margin: 0 0.3rem;
      border: 1px solid ${({ theme }) => theme.colors.white};
      border-radius: 0.2rem;
      color: ${({ theme }) => theme.colors.mainBlue};
      font-size: 1rem;
      text-align: center;
      -moz-appearance: textfield;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    button {
      width: unset;
      height: unset;
      font-size: 1.7rem;
    }
  }
`;

export const ProjectCarrouselSection = styled.div`
  border-bottom: ${({ theme }) => theme.css.border};
`;

export const Project = styled(Wrapper)`
  display: flex;
  position: relative;
  padding: 0 0.9375rem;
  flex-direction: row;

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    padding: 0;
  }

  @media screen and (min-width: 1087px) {
    max-width: 1072px;
  }
`;

export const BtnCarrouselBefore = styled.button``;
export const BtnCarrouselAfter = styled.button``;

export const ProjectCarrouselFullScreen = styled.div`
  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    display: flex;
    align-items: center;
    min-width: 3.5rem;
    ${BtnCarrouselBefore},
    ${BtnCarrouselAfter} {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.mainBlue};
      outline: none;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: ${({ theme }) => theme.colors.btnBlueHover};
        color: ${({ theme }) => theme.colors.greyOne};
      }
    }
    ${BtnCarrouselBefore} {
      margin-right: 1rem;
    }
    ${BtnCarrouselAfter} {
      margin-left: 1rem;
    }
  }
`;
