import { useState, useEffect, useRef, useContext, Dispatch, SetStateAction, ChangeEvent } from 'react';
import WindowWidthContext from './../../Context/WindowWidthContext';
import axios from 'axios';
import { useRequest } from '../../Hooks/useRequestHooks';
import useIsLoaded from '../../Hooks/useIsLoadedHook';
import { apiDomain, apiVersion } from '../../config/environment.config';
import { IPortfolio, IProject } from '../../interfaces';
import { IFetchLoaded } from '../../Pages/HomePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfoProject from './../InfoProject';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import {
  PortfolioContainer,
  WrapperPortfolio,
  Projects,
  ProjectsPorfolio,
  ProjectCard,
  ProjectCardName,
  ProjectCardMore,
  PortfolioPagination,
  PortfolioActionPagination,
  ProjectCarrouselSection,
  Project,
  ProjectCarrouselFullScreen,
  BtnCarrouselBefore,
  BtnCarrouselAfter,
  PortfolioInfoContainer
} from './Portfolio.styled';
import { TitleRight } from '../../styles/components/Title.styled';

interface IPortfolioProps {
  setFetchLoaded: Dispatch<SetStateAction<IFetchLoaded>>;
}

interface IDisplayProjectInfoProps {
  item: IProject;
  setDisplayProject: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<IProject | null>>;
}

const Portfolio = ({ setFetchLoaded }: IPortfolioProps) => {
  const windowWidth = useContext(WindowWidthContext);
  const [value, setValue] = useState<IProject | null>(null);
  const [displayProject, setDisplayProject] = useState(false);
  const [arrayProject, setArrayProject] = useState<IProject[] | []>([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageIndexCarousel, setPageIndexCarousel] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [paginationInput, setPaginationInput] = useState<string>('');
  const [indexProject, setIndexProject] = useState(0);
  const [nextProject, setNextProject] = useState(true);
  const nodeRef = useRef<HTMLDivElement>(null);
  const pageSize: number = 6;

  const { data, loading, error } = useRequest<IPortfolio>({
    method: 'get',
    url: `${apiDomain}/api/${apiVersion}/projects/pagination?page=${pageIndex - 1}`
  });

  useIsLoaded({ loading, error, setStateFunc: setFetchLoaded, objectKey: 'portfolio' });

  useEffect(() => {
    if (data) {
      setArrayProject(data.arrayData);
      setPageCount(Math.ceil(data.totalData / pageSize));
    }
  }, [data]);

  useEffect(() => {
    if (pageIndex) {
      setPaginationInput(pageIndex.toString());
    }
  }, [pageIndex]);

  const displayProjectInfo = async ({ item, setDisplayProject, setValue }: IDisplayProjectInfoProps): Promise<void> => {
    setDisplayProject(true);
    setValue(item);
    let findIndexProject = arrayProject.findIndex((el) => el._id === item._id);
    setIndexProject(findIndexProject);
    if (pageIndex > 1 && (findIndexProject === 0 || findIndexProject === 1)) {
      const getListProjectEndPoint = `${apiDomain}/api/${apiVersion}/projects/pagination?page=${pageIndex - 2}`;
      await axios.get<IPortfolio>(getListProjectEndPoint).then((response) => {
        setArrayProject((arrayProject) => [...response.data.arrayData, ...arrayProject]);
        setIndexProject(pageSize + findIndexProject);
      });
    }
    if ((findIndexProject === pageSize - 2 || findIndexProject === pageSize - 1) && pageIndex < pageCount) {
      const getListProjectEndPoint = `${apiDomain}/api/${apiVersion}/projects/pagination?page=${pageIndex}`;
      await axios.get<IPortfolio>(getListProjectEndPoint).then((response) => {
        setArrayProject((arrayProject) => [...arrayProject, ...response.data.arrayData]);
      });
    }
    arrayProject[findIndexProject + 1] ? setNextProject(true) : setNextProject(false);
  };

  const switchProjectCarousel = async (increment: number): Promise<void> => {
    if (increment === 1) {
      setValue(arrayProject[indexProject + 1]);
      setIndexProject((indexProject) => indexProject + 1);
      if (pageIndexCarousel + 1 <= pageCount) {
        let realPageIndexCarousel = pageIndexCarousel;
        if ((indexProject + 1) % pageSize === 0) {
          setPageIndexCarousel((pageIndexCarousel) => pageIndexCarousel + 1);
          realPageIndexCarousel = pageIndexCarousel + 1;
        }
        if (!arrayProject[indexProject + 3] && realPageIndexCarousel < pageCount) {
          const getListProjectEndPoint = `${apiDomain}/api/${apiVersion}/projects/pagination?page=${pageIndexCarousel}`;
          await axios.get<IPortfolio>(getListProjectEndPoint).then((response) => {
            setArrayProject((arrayProject) => [...arrayProject, ...response.data.arrayData]);
          });
        }
      } else {
        arrayProject[indexProject + 2] ? setNextProject(true) : setNextProject(false);
      }
    } else {
      setValue(arrayProject[indexProject - 1]);
      setNextProject(true);
      setIndexProject((indexProject) => indexProject - 1);
      let realPageIndexCarousel = pageIndexCarousel;
      if ((indexProject - 1) % 6 === pageSize - 1) {
        setPageIndexCarousel((pageIndexCarousel) => pageIndexCarousel - 1);
        realPageIndexCarousel = pageIndexCarousel - 1;
      }
      if (realPageIndexCarousel > 1) {
        if (!arrayProject[indexProject - 3]) {
          const getListProjectEndPoint = `${apiDomain}/api/${apiVersion}/projects/pagination?page=${pageIndexCarousel - 2}`;
          await axios.get<IPortfolio>(getListProjectEndPoint).then((response) => {
            setArrayProject((arrayProject) => [...response.data.arrayData, ...arrayProject]);
            setIndexProject(pageSize + (indexProject - 1));
          });
        }
      }
    }
  };

  const gotoPage = (page: number): void => {
    setPageIndex(page);
    setPageIndexCarousel(page);
  };

  const previousPage = (): void => {
    if (pageIndex > 1) {
      setPageIndex((currPageIndex) => currPageIndex - 1);
      setPageIndexCarousel((currPageIndex) => currPageIndex - 1);
    }
  };

  const nextPage = async (): Promise<void> => {
    if (pageIndex < pageCount) {
      setPageIndex((currPageIndex) => currPageIndex + 1);
      setPageIndexCarousel((currPageIndex) => currPageIndex + 1);
    }
  };

  const inputPagination = (e: ChangeEvent<HTMLInputElement>): void => {
    if (Number(e.target.value) > pageCount) {
      setPageIndex(pageCount);
      setPageIndexCarousel(pageCount);
      setPaginationInput(pageCount.toString());
    } else if (Number(e.target.value) < 0 || e.target.value === '') {
      setPaginationInput('');
    } else if (e.target.value === '0') {
      setPaginationInput('1');
      setPageIndex(1);
      setPageIndexCarousel(1);
    } else {
      setPaginationInput(e.target.value);
      setPageIndex(Number(e.target.value));
      setPageIndexCarousel(Number(e.target.value));
    }
  };

  return (
    <>
      {!displayProject && (
        <PortfolioContainer>
          <WrapperPortfolio id="portfolio">
            <TitleRight>Portfolio</TitleRight>
            <Projects>
              <ProjectsPorfolio>
                {arrayProject.map((item) => {
                  return (
                    <ProjectCard key={item._id}>
                      <img src={`${apiDomain}/api/${apiVersion}/projects/image/${item.images[0].fileName}`} alt={item.images[0].alt} />
                      <ProjectCardName>{item.projectName}</ProjectCardName>
                      <ProjectCardMore>
                        <div>
                          <button
                            title="Voir le informations du projet"
                            tabIndex={0}
                            onClick={() => displayProjectInfo({ item, setDisplayProject, setValue })}
                            onKeyPress={() => displayProjectInfo({ item, setDisplayProject, setValue })}
                          >
                            <FontAwesomeIcon icon="plus" />
                          </button>
                          {item.urlGithub && (
                            <span>
                              <a tabIndex={0} target="_blank" rel="noreferrer" title="Voir le projet sur GitHub" href={item.urlGithub}>
                                <FontAwesomeIcon icon={['fab', 'github']} />
                              </a>
                            </span>
                          )}
                        </div>
                        {item.urlWeb && (
                          <div>
                            <span>
                              <a tabIndex={0} target="_blank" rel="noreferrer" title="Voir le site web du projet" href={item.urlWeb}>
                                <FontAwesomeIcon icon="link" />
                              </a>
                            </span>
                          </div>
                        )}
                      </ProjectCardMore>
                    </ProjectCard>
                  );
                })}
              </ProjectsPorfolio>

              {pageCount >= 1 && (
                <PortfolioPagination>
                  <PortfolioActionPagination>
                    <button onClick={() => gotoPage(1)} aria-label="Aller au début">
                      <FontAwesomeIcon icon="angle-double-left" />
                    </button>
                    <button onClick={() => previousPage()} aria-label="Précédent">
                      <FontAwesomeIcon icon="angle-left" />
                    </button>
                    <span>
                      Page
                      <label>
                        <input
                          type="number"
                          value={paginationInput || ''}
                          min={1}
                          max={pageCount}
                          onChange={(e) => {
                            inputPagination(e);
                          }}
                        />
                      </label>
                      sur {pageCount}
                    </span>
                    <button onClick={() => nextPage()} aria-label="Suivant">
                      <FontAwesomeIcon icon="angle-right" />
                    </button>
                    <button onClick={() => gotoPage(pageCount)} aria-label="Aller à la fin">
                      <FontAwesomeIcon icon="angle-double-right" />
                    </button>
                  </PortfolioActionPagination>
                </PortfolioPagination>
              )}
            </Projects>
          </WrapperPortfolio>
        </PortfolioContainer>
      )}

      {displayProject && (
        <ProjectCarrouselSection>
          <Project id="portfolio">
            {windowWidth >= 1087 && (
              <ProjectCarrouselFullScreen>
                {indexProject > 0 && (
                  <BtnCarrouselBefore
                    title="Projet précédant"
                    onClick={() => {
                      switchProjectCarousel(0);
                    }}
                  >
                    <FontAwesomeIcon icon="chevron-left" />
                  </BtnCarrouselBefore>
                )}
              </ProjectCarrouselFullScreen>
            )}

            <PortfolioInfoContainer>
              <TitleRight>Projet - {value?.projectName}</TitleRight>
              <SwitchTransition mode={'out-in'}>
                <CSSTransition
                  key={value?._id}
                  nodeRef={nodeRef}
                  addEndListener={(done: () => void) => {
                    nodeRef.current?.addEventListener('transitionend', done, false);
                  }}
                  classNames="fade"
                >
                  <div ref={nodeRef}>
                    <InfoProject
                      value={value!}
                      setArrayProject={setArrayProject}
                      setDisplayProject={setDisplayProject}
                      pageIndexState={{ pageIndex, setPageIndex }}
                      switchProjectCarousel={switchProjectCarousel}
                      indexProjectState={{ indexProject, setIndexProject }}
                      pageIndexCarousel={pageIndexCarousel}
                      nextProjectState={{ nextProject, setNextProject }}
                    />
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </PortfolioInfoContainer>

            {windowWidth >= 1087 && (
              <ProjectCarrouselFullScreen>
                {nextProject && (
                  <BtnCarrouselAfter
                    title="Projet suivant"
                    onClick={() => {
                      switchProjectCarousel(1);
                    }}
                  >
                    <FontAwesomeIcon icon="chevron-right" />
                  </BtnCarrouselAfter>
                )}
              </ProjectCarrouselFullScreen>
            )}
          </Project>
        </ProjectCarrouselSection>
      )}
    </>
  );
};

export default Portfolio;
