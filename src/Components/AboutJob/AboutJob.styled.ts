import styled from 'styled-components';
import { Wrapper } from '../../styles/components/Layout.styled';

export const AboutJobContainer = styled.div`
  width: 100%;
  border-top: ${({ theme }) => theme.css.border};
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
  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    div:first-child {
      display: flex;
      width: 25%;
      border-left: ${({ theme }) => theme.css.border};
    }
    div:last-child {
      display: flex;
      width: 25%;
      border-right: ${({ theme }) => theme.css.border};
    }
    div:nth-child(even) {
      width: 50%;
      border-left: ${({ theme }) => theme.css.border};
      border-right: ${({ theme }) => theme.css.border};
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
    border-right: ${({ theme }) => theme.css.border};
  }

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    div:first-child,
    div:last-child {
      display: block;
    }
    div:first-child {
      border-left: ${({ theme }) => theme.css.border};
    }
    div {
      border-right: ${({ theme }) => theme.css.border};
    }
  }
`;

export const AboutJobThree = styled(AbourJobDiv)`
  flex-wrap: wrap;
  div:first-child {
    border-right: ${({ theme }) => theme.css.border};
  }
  div:last-child {
    width: 100%;
  }
  div:nth-child(even) {
    border-right: ${({ theme }) => theme.css.border};
  }
  div:nth-child(-n + 2) {
    border-bottom: ${({ theme }) => theme.css.border};
  }

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    flex-wrap: nowrap;
    div:last-child {
      width: 50%;
    }
    div:nth-child(-n + 2) {
      border-bottom: unset;
      border-right: ${({ theme }) => theme.css.border};
    }
  }

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    div:first-child {
      border-left: ${({ theme }) => theme.css.border};
    }
    div:last-child {
      border-right: ${({ theme }) => theme.css.border};
    }
  }
`;

export const AboutJobFour = styled(AbourJobDiv)`
  flex-wrap: wrap;
  div:nth-child(-n + 2) {
    border-bottom: ${({ theme }) => theme.css.border};
  }
  div:nth-child(odd) {
    border-right: ${({ theme }) => theme.css.border};
  }

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    flex-wrap: nowrap;
    div {
      width: 25%;
      border-right: ${({ theme }) => theme.css.border};
    }
    div:nth-child(-n + 2) {
      border-bottom: unset;
    }
    div:first-child {
      border-left: ${({ theme }) => theme.css.border};
    }
  }
`;
