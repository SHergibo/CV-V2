import { useState, useRef, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import { WindowWidthContext } from './../../Routes/Context.route';
import { useRequest } from '../../Hooks/useRequestHooks';
import useIsLoaded from '../../Hooks/useIsLoadedHook';
import { apiDomain, apiVersion } from '../../config/environment.config';
import { IGeneralInfo } from '../../interfaces';
import { IFetchLoaded } from '../../Pages/HomePage';
import { AboutStyled, AboutContainer, ImgAbout, AboutText, AboutTitle, AboutMe, Info } from './About.styled';
import AboutJob from './../AboutJob';

interface IAboutProps {
  setGeneralInfo: Dispatch<SetStateAction<IGeneralInfo | null>>;
  setFetchLoaded: Dispatch<SetStateAction<IFetchLoaded>>;
}

const About = ({ setGeneralInfo, setFetchLoaded }: IAboutProps) => {
  const windowWidth = useContext(WindowWidthContext);
  const [imgStyled, setImgStyled] = useState(false);
  const imgAboutRef = useRef<HTMLDivElement>(null!);
  const profilePictureRef = useRef<HTMLImageElement>(null!);
  const { data, error, loading } = useRequest<IGeneralInfo>({
    method: 'get',
    url: `${apiDomain}/api/${apiVersion}/infos`
  });

  useIsLoaded({ loading, error, setStateFunc: setFetchLoaded, objectKey: 'info' });

  useEffect(() => {
    if (data && !error) setGeneralInfo(data);
  }, [data, error, setGeneralInfo]);

  useEffect(() => {
    if (windowWidth >= 640) {
      if (imgAboutRef.current.offsetHeight - profilePictureRef.current.height >= 20) {
        setImgStyled(true);
      }
    }
    if (windowWidth < 640) {
      setImgStyled(false);
    }
  }, [windowWidth]);

  return (
    <AboutStyled id="about">
      <AboutContainer>
        <ImgAbout ref={imgAboutRef} imgStyled={imgStyled}>
          {data?.profilePic?.fileName && <img ref={profilePictureRef} src={`${apiDomain}/api/${apiVersion}/infos/image/${data?.profilePic?.fileName}`} alt={data?.profilePic?.alt} />}
          {!data?.profilePic?.fileName && <img ref={profilePictureRef} src="./default-profile-picture.png" alt="Profil par défaut" />}
        </ImgAbout>
        <AboutText>
          <AboutTitle>À propos</AboutTitle>
          <AboutMe>
            <h2>Bonjour !</h2>
            <p>{data?.description}</p>
          </AboutMe>
          <Info>
            <ul>
              <li>
                <span>Téléphone :</span>
                <div>{data?.phone}</div>
              </li>
              <li>
                <span>Email :</span>
                <div>{data?.email}</div>
              </li>
              <li>
                <span>Adresse :</span>
                <div>
                  {data?.address.street && (
                    <>
                      {data?.address.street}, {data?.address.number} {data?.address.zip} {data?.address.city}
                    </>
                  )}
                </div>
              </li>
              <li>
                <span>Date de naissance :</span>
                <div>{data?.birthdate}</div>
              </li>
              <li>
                <span>Permis de conduire :</span>
                <div>{data?.licence}</div>
              </li>
            </ul>
          </Info>
        </AboutText>
      </AboutContainer>
      <AboutJob generalInfo={data} />
    </AboutStyled>
  );
};

export default About;
