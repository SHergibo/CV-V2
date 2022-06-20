import styled from 'styled-components';
import { Wrapper } from '../../styles/components/Layout.styled';

export const AboutJobContainer = styled.div`
  width: 100%;
  border-top: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
`;

const AbourJobDiv = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 9.375rem;
    svg {
      margin-bottom: 1.25rem;
      path {
        fill: ${({ theme }) => theme.colors.greyThree};
      }
    }
    span {
      svg {
        height: 3rem;
        width: 3rem;
      }
    }
    .svg-inline--fa {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0;
    font-weight: 700;
    letter-spacing: -0.0625rem;
    font-size: 1.0625rem;
  }
`;

export const AboutJobOne = styled(AbourJobDiv)`
  div:first-child {
    display: none;
  }
  div:last-child {
    display: none;
  }
  div:nth-child(even) {
    width: 100%;
  }
  @media screen and (min-width: 640px) {
    div:first-child {
      display: flex;
      width: 25%;
      border-left: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
    }
    div:last-child {
      display: flex;
      width: 25%;
      border-right: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
    }
    div:nth-child(even) {
      width: 50%;
      border-left: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
      border-right: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
    }
  }
`;

export const AboutJobTwo = styled(AbourJobDiv)`
  div:first-child {
    display: none;
  }
  div:last-child {
    display: none;
  }
  div:nth-child(even) {
    border-right: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
  }

  @media screen and (min-width: 960px) {
    div:first-child,
    div:last-child {
      display: block;
    }
    div:first-child {
      border-left: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
    }
    div {
      border-right: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
    }
  }
`;

export const AboutJobThree = styled(AbourJobDiv)`
  flex-wrap: wrap;
  div:first-child {
    border-right: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
  }
  div:last-child {
    width: 100%;
  }
  div:nth-child(even) {
    border-right: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
  }
  div:nth-child(-n + 2) {
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
  }

  @media screen and (min-width: 640px) {
    flex-wrap: nowrap;
    div:last-child {
      width: 50%;
    }
    div:nth-child(-n + 2) {
      border-bottom: unset;
      border-right: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
    }
  }

  @media screen and (min-width: 960px) {
    div:first-child {
      border-left: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
    }
    div:last-child {
      border-right: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
    }
  }
`;

export const AboutJobFour = styled(AbourJobDiv)`
  flex-wrap: wrap;
  div:nth-child(-n + 2) {
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
  }
  div:nth-child(odd) {
    border-right: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
  }

  @media screen and (min-width: 960px) {
    flex-wrap: nowrap;
    div {
      width: 25%;
      border-right: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
    }
    div:nth-child(-n + 2) {
      border-bottom: unset;
    }
    div:first-child {
      border-left: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
    }
  }
`;
