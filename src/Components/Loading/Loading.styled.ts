import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  transition: 0.5s ease-in-out;

  span {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
