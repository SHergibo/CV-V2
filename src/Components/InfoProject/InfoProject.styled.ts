import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { BtnTitleAction, TitleContainer } from '../TitleAction/TitleAction.styled';

export const SwiperModal = styled(Swiper)`
  margin-top: 3rem;

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    width: 50vw;
    margin-top: 0;
  }

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    margin: 0;
    width: unset;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3.75rem 0;
  overflow: hidden;

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    display: flex;
    justify-content: flex-start;
  }

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    padding: 0;
  }
`;

interface INavigationSmallDiveCarrousel {
  indexProject: boolean;
}

export const NavigationSmallDeviceCarrousel = styled.div<INavigationSmallDiveCarrousel>`
  display: flex;
  justify-content: ${({ indexProject }) => (indexProject ? 'space-between' : 'flex-end')};
  margin-bottom: 2rem;
  button + button {
    margin-left: 1rem;
  }
  button {
    height: 2.5rem;
    padding: 0 0.5rem;
    font-size: 1.1rem;
    border-radius: 0.625rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.blueHover};
      color: ${({ theme }) => theme.colors.greyOne};
    }
  }
  #chevronR {
    margin-left: 0.5rem;
  }
  #chevronL {
    margin-right: 0.5rem;
  }
`;

export const InfoProjectContainer = styled.div`
  .swiper-slide {
    width: 100% !important;
  }

  .swiper-button-prev,
  .swiper-button-next {
    opacity: 0;
    transition: opacity ease-in-out 0.25s;
  }

  .swiper {
    margin: rem(10px) 0;
    cursor: pointer;
    &:hover {
      .swiper-button-prev,
      .swiper-button-next {
        opacity: 1;
      }
    }
    .swiper-pagination {
      bottom: rem(17px) !important;
    }
    img {
      margin: 0 !important;
    }
  }

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    display: flex;
  }
`;

export const ImageProject = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  img {
    width: 100%;
    -webkit-box-shadow: 0rem 0.9375rem 2.25rem -0.6875rem hsla(0, 0%, 0%, 0.3);
    -moz-box-shadow: 0rem 0.9375rem 2.25rem -0.6875rem hsla(0, 0%, 0%, 0.3);
    box-shadow: 0rem 0.9375rem 2.25rem -0.6875rem hsla(0, 0%, 0%, 0.3);
  }
  span,
  a {
    color: hsl(167, 72%, 60%);
    transition: color 0.2s ease-in-out;
    &:hover {
      color: hsl(167, 49%, 45%);
    }
  }
  span {
    svg {
      margin-right: 0.3125rem;
    }
  }
`;

export const ProjectInfo = styled.div`
  margin-top: 1.25rem;
  ${TitleContainer} {
    margin-bottom: 0.9375rem;
  }

  h2 {
    width: 80%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.1875rem;
    font-weight: bolder;
    position: relative;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.colors.greyFour};
      width: 100%;
      height: 0.0625rem;
      bottom: 1.5625rem;
      margin-left: 0.9375rem;
    }
  }

  ${BtnTitleAction} {
    width: 20%;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.625rem;
  }

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    margin: 0 0 0 1.25rem;
    width: 55%;
  }
`;

export const TechnoUsed = styled.div`
  margin-top: 1.25rem;
  h4 {
    color: ${({ theme }) => theme.colors.greyOne};
  }
  ul {
    display: flex;
    flex-direction: row;
    padding: 0.625rem 0;
    li {
      margin-right: 0.625rem;
      padding: 0.3125rem 0.5rem 0.3125rem 0.5rem;
      border-radius: 0.1875rem;
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      text-transform: capitalize;
      transition: background-color 0.2s ease-in-out;
      &:hover {
        background-color: ${({ theme }) => theme.colors.blueHover};
      }
    }
  }
`;
