import styled from 'styled-components';
import { CloseBtn } from '../../styles/mixins/CloseBtn.styled';

interface IModalDisplay {
  displayForm: boolean;
}

export const ModalDisplayContainer = styled.div<IModalDisplay>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(211, 80%, 10%, 0.984);
  opacity: ${(displayForm) => (displayForm ? '1' : '0')};
  z-index: ${(displayForm) => (displayForm ? '101' : '-10')};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  padding: 1.25rem 0.9375rem;
  overflow-y: auto;

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    height: auto;
    padding: 3.125rem;
    -webkit-box-shadow: 0px 0.9375rem 2.25rem -0.6875rem hsla(0, 0%, 0%, 0.75);
    -moz-box-shadow: 0px 0.9375rem 36px -0.6875rem hsla(0, 0%, 0%, 0.75);
    box-shadow: 0px 0.9375rem 2.25rem -0.6875rem hsla(0, 0%, 0%, 0.75);
  }

  @media screen and (${({ theme }) => theme.mediaQueries.desktop}) {
    width: 60rem;
  }
`;

export const CloseModal = styled.button`
  ${CloseBtn({ top: '0.625rem', right: '0.625rem', size: '1.5625rem', fSize: '0.9375rem' })}
  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    top: 0.625rem;
    right: 0.625rem;
  }
`;
