import styled from 'styled-components';
import { Wrapper } from './../../styles/components/Layout.styled';
import { SubTitle } from './../../styles/components/Title.styled';

export const GraphicContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`;

export const GraphicOne = styled.div`
  position: absolute;
  top: -5rem;
  right: -3.75rem;
  display: block;
  width: 9.375rem;
  height: 9.375rem;
  transform: rotate(-45deg);
  background-image: linear-gradient(90deg, hsl(232, 68%, 43%) 0%, hsla(234, 54%, 26%, 0.902) 100%);

  @media screen and (min-width: 371px) {
    top: -6.25rem;
    right: -3.75rem;
    width: 12.5rem;
    height: 12.5rem;
  }

  @media screen and (min-width: 426px) {
    width: 13.75rem;
    height: 13.75rem;
  }
`;

export const GraphicTwo = styled.div`
  position: absolute;
  top: -5rem;
  right: 1.875rem;
  display: block;
  width: 8.125rem;
  height: 8.125rem;
  border-radius: 6.25rem;
  background-image: linear-gradient(-90deg, hsla(166, 62%, 50%, 0.5) 0%, hsl(167, 72%, 60%) 100%);

  @media screen and (min-width: 371px) {
    top: -6.25rem;
    right: 5rem;
    width: 11.25rem;
    height: 11.25rem;
  }

  @media screen and (min-width: 426px) {
    width: 12.5rem;
    height: 12.5rem;
  }
`;

export const Welcome = styled(Wrapper)`
  position: fixed;
  margin: 0 auto;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  padding: 0 0.9375rem;
  z-index: -1;

  @media screen and (min-width: 426px) {
    padding: 0;
  }
`;

export const PageTitle = styled(SubTitle)`
  position: absolute;
  top: 0;
  padding-left: 0.9375rem;
  border-left: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
`;

export const DataWelcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  svg {
    height: 2.5rem;
    path {
      fill: hsl(360, 82%, 63%);
      transition: 0.2s ease-in-out;
    }
  }
`;

export const WelcomeTitleGradient = styled.h1`
  text-align: center;
  background: -webkit-linear-gradient(45deg, hsl(243, 100%, 31%), hsl(155, 100%, 50%) 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
  font-size: 5rem;
  letter-spacing: -0.25rem;
  padding: 0.625rem;
`;
