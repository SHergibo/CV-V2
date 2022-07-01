import { useState, useRef, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WindowWidthContext from './../../Context/WindowWidthContext';
import { IGeneralInfo } from '../../interfaces';
import { TitleContainer, BtnTitleAction, BtnTitleActionDelete } from './TitleAction.styled';

enum EFormat {
  switch = 'switch',
  return = 'return',
  delete = 'delete'
}

interface ITitleActionProps {
  format: `${EFormat}`;
  title: string;
  btnTitle: string;
  action: () => void;
  btnState?: { generalInfo?: IGeneralInfo; addBtn?: boolean; editbtn?: boolean };
}

const TitleAction = ({ format = 'switch', title, btnTitle, action, btnState = {} }: ITitleActionProps) => {
  const windowWidth = useContext(WindowWidthContext);
  const { generalInfo, addBtn, editbtn } = btnState;
  const [h2after50, setH2after50] = useState(false);
  const [h2after75, setH2after75] = useState(false);
  let titleRef = useRef<HTMLHeadingElement>(null!);

  useEffect(() => {
    if (titleRef.current.clientHeight > 49 && titleRef.current.clientHeight <= 98) {
      setH2after50(true);
    }
    if (titleRef.current.clientHeight > 98 && titleRef.current.clientHeight <= 147) {
      setH2after75(true);
    }
    if (titleRef.current.clientHeight <= 49) {
      setH2after50(false);
    }
    if (titleRef.current.clientHeight <= 98) {
      setH2after75(false);
    }
  }, [windowWidth]);

  return (
    <TitleContainer h2after50={h2after50} h2after75={h2after75}>
      <h2 ref={titleRef}>{title}</h2>

      {format !== 'delete' && (
        <BtnTitleAction>
          {format === 'switch' && (
            <button title={btnTitle} onClick={action}>
              {addBtn && <FontAwesomeIcon icon="edit" />}
              {editbtn && <FontAwesomeIcon icon="plus" />}
            </button>
          )}
          {format === 'return' && (
            <button title={btnTitle} onClick={action}>
              <FontAwesomeIcon icon="chevron-left" />
            </button>
          )}
        </BtnTitleAction>
      )}

      {generalInfo?.firstname && (
        <BtnTitleActionDelete>
          <button title={btnTitle} onClick={action}>
            <FontAwesomeIcon icon="trash-alt" />
          </button>
        </BtnTitleActionDelete>
      )}
    </TitleContainer>
  );
};

export default TitleAction;
