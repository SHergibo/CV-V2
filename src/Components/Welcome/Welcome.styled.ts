import styled from 'styled-components';

export const JobName = styled.div`
  color: ${({ theme }) => theme.colors.greyOne};
  font-size: 1.25rem;
  font-weight: bolder;
  span {
    color: ${({ theme }) => theme.colors.blue};
    div {
      text-decoration: underline;
    }
  }
`;

export const DefaultWelcomeTitle = styled.div`
  color: ${({ theme }) => theme.colors.greyOne};
  font-size: 1.5625rem;
  font-weight: bolder;
`;

export const IconScroll = styled.div`
  position: relative;
  width: 1.25rem;
  height: 2.1875rem;
  margin-top: 0.75rem;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.greyOne};
  border-radius: 25px;
  &:before {
    content: '';
    position: absolute;
    width: 0.375rem;
    height: 0.375rem;
    background: ${({ theme }) => theme.colors.greyOne};
    margin-left: -0.1875rem;
    top: 0.5rem;
    left: 50%;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }
  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(15px);
    }
  }
`;
