import styled from 'styled-components';
import { CircleBtn } from '../../styles/mixins/CircleBtn.styled';

const BtnTileActionContainer = styled.div`
  margin-left: 0.9375rem;
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.greyFour};
    width: 100%;
    height: 0.0625rem;
    bottom: 1.375rem;
    left: 3.375rem;
  }
`;

export const BtnTitleAction = styled(BtnTileActionContainer)`
  ${({ theme }) => CircleBtn({ color: theme.colors.blue, colorHover: theme.colors.btnBlueHover })}
`;

export const BtnTitleActionDelete = styled(BtnTileActionContainer)`
  ${({ theme }) => CircleBtn({ color: theme.colors.btnRed, colorHover: theme.colors.btnRedHover })}
`;

export const TitleContainer = styled.div`
  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      width: 85%;
    }
  }

  @media screen and (${({ theme }) => theme.mediaQueries.tablet}) {
    h2 {
      width: 90%;
    }
    ${BtnTitleAction},
    ${BtnTitleActionDelete} {
      width: 10%;
    }
  }
`;
