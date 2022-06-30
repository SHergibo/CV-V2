import { Dispatch, SetStateAction } from 'react';
import { closeModal } from '../../utils/modalDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalDisplayContainer, ModalContainer, CloseModal } from './Modal.styled';

interface IModalDisplayProps {
  div: JSX.Element;
  displayFormState: { displayForm: boolean; setDisplayForm: Dispatch<SetStateAction<boolean>> };
}

const ModalDisplay = ({ div, displayFormState }: IModalDisplayProps) => {
  const { displayForm, setDisplayForm } = displayFormState;
  const closeExteriorModal = () => {
    if (displayForm) {
      closeModal(setDisplayForm);
    }
  };

  return (
    <ModalDisplayContainer onMouseDown={() => closeExteriorModal()} displayForm={displayForm}>
      <ModalContainer>
        <CloseModal onClick={() => closeModal(setDisplayForm)}>
          <FontAwesomeIcon icon="times" />
        </CloseModal>
        {div}
      </ModalContainer>
    </ModalDisplayContainer>
  );
};

export default ModalDisplay;
