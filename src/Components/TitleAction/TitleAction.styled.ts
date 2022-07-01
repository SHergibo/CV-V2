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
  button {
    ${({ theme }) => CircleBtn({ bgColor: theme.colors.btnBlue, bgColorHover: theme.colors.btnBlueHover })}
  }
`;

export const BtnTitleActionDelete = styled(BtnTileActionContainer)`
  button {
    ${({ theme }) => CircleBtn({ bgColor: theme.colors.btnRed, bgColorHover: theme.colors.btnRedHover })}
  }
`;

interface ITitleContainer {
  h2after50: boolean;
  h2after75: boolean;
}

export const TitleContainer = styled.div<ITitleContainer>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    width: 85%;
    ${({ h2after50, h2after75 }) => {
      if (h2after50) return 'bottom: 3.125rem';
      if (h2after75) return 'bottom: 4.6875rem';
      if (!h2after50 || !h2after75) return null;
    }}
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
