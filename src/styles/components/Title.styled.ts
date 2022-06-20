import styled from 'styled-components';

export const SubTitle = styled.div`
  display: flex;
  font-weight: bolder;
  letter-spacing: -0.0625rem;
  height: 2.5rem;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.greyThree};
`;

export const TitleRight = styled(SubTitle)`
  justify-content: flex-end;
  border-right: 0.5px solid ${({ theme }) => theme.colors.greyBorder};
  padding-right: 0.9375rem;
`;
