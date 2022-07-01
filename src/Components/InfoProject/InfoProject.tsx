import { useState, useContext, Dispatch, SetStateAction } from 'react';
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
import { SwiperModal, ProjectContainer, NavigationSmallDeviceCarrousel, InfoProjectContainer, ImageProject, ProjectInfo, TechnoUsed } from './InfoProject.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface IInfoProjectProps {
  value: IProject;
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
  const { pageIndex, setPageIndex } = pageIndexState;
  const { indexProject, setIndexProject } = indexProjectState;
  const { nextProject, setNextProject } = nextProjectState;
  const [displayForm, setDisplayForm] = useState(false);
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);
  let descriptionArray = value.description.split(/\n/gi);

  let displayDesc = descriptionArray.map((item, index): JSX.Element | null => {
    if (item.length > 0) {
      return <p key={`descProject-${index}`}>{item}</p>;
    } else {
      return null;
    }
  });

  let displayFrameWorkUsed = value.technoUsedFront.map((item, index): JSX.Element => {
    return <li key={`frameworkUsed-${index}`}>{item.label}</li>;
  });

  let displayTechnoUsedBack = value.technoUsedBack.map((item, index): JSX.Element => {
    return <li key={`technoUsedBack-${index}`}>{item.label}</li>;
  });

  const closeProjectInfo = async (): Promise<void> => {
    setArrayProject((arrayProject) => {
      return arrayProject.filter((el) => Number(el.pageIndex) === pageIndexCarousel);
    });
    if (pageIndex === pageIndexCarousel) {
      const getListProjectEndPoint = `${apiDomain}/api/${apiVersion}/projects/pagination?page=${pageIndexCarousel - 1}`;
      await axios.get(getListProjectEndPoint).then((response) => {
        setArrayProject(response.data.arrayData);
      });
    } else {
      setPageIndex(pageIndexCarousel);
    }

    if (indexProject !== 0) setIndexProject(0);
    if (!nextProject) setNextProject(true);
    setDisplayProject(false);
  };

  const swiperModal = (
    <SwiperModal
      modules={[Navigation, Pagination, Keyboard, Mousewheel, Controller]}
      spaceBetween={20}
      slidesPerView={1}
      loop={value.images.length > 1 ? true : false}
      navigation
      keyboard={{
        enabled: true
      }}
      mousewheel={true}
      pagination={{ clickable: true }}
      // onSwiper={setFirstSwiper}
      // controller={{ control: secondSwiper }}
    >
      {value.images.map((item, index) => {
        return (
          <SwiperSlide key={item.id + index}>
            <img src={`${apiDomain}/api/${apiVersion}/projects/image/${item.fileName}`} alt={item.alt} />
          </SwiperSlide>
        );
      })}
    </SwiperModal>
  );

  return (
    <ProjectContainer>
      {windowWidth < 1087 && (indexProject > 0 || nextProject === true) && (
        <NavigationSmallDeviceCarrousel indexProject={indexProject > 0 ? true : false}>
          {indexProject > 0 && (
            <button
              title="Projet précédant"
              onClick={() => {
                switchProjectCarousel(0);
              }}
            >
              <FontAwesomeIcon id="chevronL" icon="chevron-left" /> Projet précédant
            </button>
          )}
          {nextProject && (
            <button
              title="Projet suivant"
              onClick={() => {
                switchProjectCarousel(1);
              }}
            >
              Projet suivant <FontAwesomeIcon id="chevronR" icon="chevron-right" />
            </button>
          )}
        </NavigationSmallDeviceCarrousel>
      )}

      <InfoProjectContainer>
        <ImageProject>
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel, Controller]}
            spaceBetween={20}
            slidesPerView={1}
            loop={value.images.length > 1 ? true : false}
            navigation
            keyboard={{
              enabled: true
            }}
            mousewheel={true}
            pagination={{ clickable: true }}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            onClick={() => {
              displayModal(setDisplayForm);
            }}
          >
            {value.images.map((item, index) => {
              return (
                <SwiperSlide key={item.id + index}>
                  <img src={`${apiDomain}/api/${apiVersion}/projects/image/${item.fileName}`} alt={item.alt} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <ModalDisplay displayFormState={{ displayForm, setDisplayForm }} div={swiperModal} />

          {value.urlWeb && (
            <span>
              <a href={value.urlWeb} target="_blank" rel="noreferrer" title="Lien vers le site web">
                <FontAwesomeIcon icon="link" />
                Lien vers le site web
              </a>
            </span>
          )}
          <span>
            <a href={value.urlGithub} target="_blank" rel="noreferrer" title="Lien vers le projet GitHub">
              <FontAwesomeIcon icon={['fab', 'github']} />
              Lien vers le projet GitHub
            </a>
          </span>
        </ImageProject>
        <ProjectInfo>
          <TitleAction format="return" title={value.projectName} btnTitle="Retourner vers le portfolio" action={closeProjectInfo} />
          <div>{displayDesc}</div>
          {(value.technoUsedFront.length >= 1 || value.technoUsedBack.length >= 1) && (
            <TechnoUsed>
              {value.technoUsedFront.length >= 1 && (
                <>
                  {value.technoUsedFront.length > 1 && <h4>Technologies Front-End utilisées :</h4>}
                  {value.technoUsedFront.length === 1 && <h4>Technologie Front-End utilisée :</h4>}
                  <ul>{displayFrameWorkUsed}</ul>
                </>
              )}
              {value.technoUsedBack.length >= 1 && (
                <>
                  {value.technoUsedBack.length > 1 && <h4>Technologies Back-End utilisées :</h4>}
                  {value.technoUsedBack.length === 1 && <h4>Technologie Back-End utilisée :</h4>}
                  <ul>{displayTechnoUsedBack}</ul>
                </>
              )}
            </TechnoUsed>
          )}
        </ProjectInfo>
      </InfoProjectContainer>
    </ProjectContainer>
  );
};

export default InfoProject;
