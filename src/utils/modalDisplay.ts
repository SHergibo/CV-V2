import { Dispatch, SetStateAction } from 'react';

const displayModal = (setDisplayForm: Dispatch<SetStateAction<boolean>>): void => {
  document.body.setAttribute('style', 'overflow : hidden;');
  setDisplayForm(true);
};

const closeModal = (setDisplayForm: Dispatch<SetStateAction<boolean>>): void => {
  document.body.removeAttribute('style');
  setDisplayForm(false);
};

export { displayModal, closeModal };
