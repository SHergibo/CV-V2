import styled, { css } from 'styled-components';
import { Wrapper } from '../../styles/components/Layout.styled';
import { TitleRight } from '../../styles/components/Title.styled';

export const AboutStyled = styled.div`
  overflow: hidden;
  border-bottom: ${({ theme }) => theme.css.border};
`;

export const AboutContainer = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  margin: 0 0.9375rem;

  @media screen and (min-width: 640px) {
    flex-direction: row;
    margin: 0 auto;
  }
`;

interface IImgAboutProps {
  imgStyled: boolean;
}

export const ImgAbout = styled.div<IImgAboutProps>`
  ${({ imgStyled }) =>
    !imgStyled &&
    css`
      display: flex;
      justify-content: center;
      overflow: hidden;
      img {
        object-fit: contain;
        max-width: 50%;
        max-height: 50%;
        width: auto;
        height: auto;
      }
    `}

  @media screen and (min-width: 640px) {
    position: relative;
    width: 25%;
    background-color: ${({ imgStyled, theme }) => (imgStyled ? 'transparent' : `${theme.colors.btnBlueOver}`)};
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.colors.btnBlueOver};
      bottom: 0;
      top: 0;
      right: 0;
      width: 1.25rem;
      z-index: 12;
    }
    img {
      position: absolute;
      width: 100%;
      border-bottom: ${({ imgStyled, theme }) => (imgStyled ? `1.25rem solid ${theme.colors.btnBlueOver}` : 'none')};
    }
  }
`;

export const AboutText = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 640px) {
    width: 75%;
  }
`;

export const AboutTitle = styled(TitleRight)`
  border-top: ${({ theme }) => theme.css.border};
  &:after,
  &:before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.greyBorder};
    width: 0.9375rem;
    height: 0.0313rem;
    top: 0;
  }
  &:after {
    right: -0.9375rem;
  }
  &:before {
    left: -0.9375rem;
  }

  @media screen and (min-width: 640px) {
    border-top: none;
    &:after,
    &:before {
      content: unset;
    }
  }
`;

export const AboutMe = styled.div`
  padding: 3.125rem 1.25rem;
  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.875rem;
  }
  p {
    color: ${({ theme }) => theme.colors.greyOne};
    margin: 0.625rem 0;
  }

  @media screen and (min-width: 640px) {
    padding: 1.25rem 1.25rem;
  }
`;

export const Info = styled.div`
  background-color: hsla(0, 0%, 100%, 0.02);
  position: relative;
  ul {
    padding: 1.25rem 1.25rem;
    li {
      display: flex;
      align-items: center;
      margin: 0.625rem 0;
      color: ${({ theme }) => theme.colors.greyThree};
      font-size: 0.8125rem;
      div {
        width: 70%;
      }
    }
  }
  span {
    display: inline-block;
    color: ${({ theme }) => theme.colors.white};
    width: 30%;
  }
  &:after {
    content: '';
    top: 0;
    position: absolute;
    background: inherit;
    bottom: 0;
    right: -75rem;
    width: 75rem;
  }

  @media screen and (min-width: 640px) {
    span {
      width: 8.75rem;
    }
  }

  @media screen and (min-width: 960px) {
    ul {
      padding: 1.25rem 2.5rem;
    }
  }
`;
