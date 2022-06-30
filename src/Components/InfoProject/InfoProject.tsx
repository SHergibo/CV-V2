import { useState, useContext, Dispatch, SetStateAction, ChangeEvent } from 'react';
import WindowWidthContext from './../../Context/WindowWidthContext';
import { apiDomain, apiVersion } from './../../config/environment.config';
import axios from 'axios';
import TitleAction from '../TitleAction';
import { displayModal } from '../../utils/modalDisplay';
import ModalDisplay from '../ModalDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProject } from '../../interfaces';
import { Navigation, Pagination, Keyboard, Mousewheel, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

interface IInfoProjectProps {
  value: IProject | null;
  setArrayProject: Dispatch<SetStateAction<IProject[] | []>>;
  setDisplayProject: Dispatch<SetStateAction<boolean>>;
  pageIndexState: { pageIndex: number; setPageIndex: Dispatch<SetStateAction<number>> };
  switchProjectCarousel: (increment: number) => Promise<void>;
  indexProjectState: { indexProject: number; setIndexProject: Dispatch<SetStateAction<number>> };
  pageIndexCarousel: number;
  nextProjectState: { nextProject: boolean; setNextProject: Dispatch<SetStateAction<boolean>> };
}

const InfoProject = ({ value, setArrayProject, setDisplayProject, pageIndexState, switchProjectCarousel, indexProjectState, pageIndexCarousel, nextProjectState }: IInfoProjectProps) => {
  const windowWidth = useContext(WindowWidthContext);
  return <div></div>;
};

export default InfoProject;
