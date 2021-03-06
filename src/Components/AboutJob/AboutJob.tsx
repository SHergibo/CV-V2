import { useContext } from 'react';
import { IGeneralInfo } from './../../interfaces';
import WindowWidthContext from './../../Context/WindowWidthContext';
import parse from 'html-react-parser';
import FontAwesome from '../FontAwesome';
import { AboutJobContainer, AboutJobOne, AboutJobTwo, AboutJobThree, AboutJobFour } from './AboutJob.styled';

interface IAboutJobProps {
  generalInfo: IGeneralInfo | undefined;
}

const AboutJob = ({ generalInfo }: IAboutJobProps) => {
  const windowWidth = useContext(WindowWidthContext);

  return (
    <>
      {(windowWidth >= 960 || (windowWidth < 960 && generalInfo && generalInfo.professionTitles?.length >= 1)) && (
        <AboutJobContainer id="aboutJob">
          {generalInfo?.professionTitles.length === 0 && (
            <AboutJobFour>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </AboutJobFour>
          )}

          {generalInfo?.professionTitles.length === 1 && (
            <AboutJobOne>
              <div></div>
              <div>
                {generalInfo?.professionTitles[0].fontAwesomeIcon?.value && (
                  <FontAwesome prefix={generalInfo?.professionTitles[0].fontAwesomeIcon.prefix} value={generalInfo?.professionTitles[0].fontAwesomeIcon.value} />
                )}
                {generalInfo?.professionTitles[0].svgIconProfTitle && <span>{parse(generalInfo?.professionTitles[0].svgIconProfTitle)}</span>}
                <p>{generalInfo?.professionTitles[0].nameProfessionTitle}</p>
              </div>
              <div></div>
            </AboutJobOne>
          )}
          {generalInfo?.professionTitles.length === 2 && (
            <AboutJobTwo>
              <div></div>
              <div>
                {generalInfo?.professionTitles[0].fontAwesomeIcon?.value && (
                  <FontAwesome prefix={generalInfo?.professionTitles[0].fontAwesomeIcon.prefix} value={generalInfo?.professionTitles[0].fontAwesomeIcon.value} />
                )}
                {generalInfo?.professionTitles[0].svgIconProfTitle && <span>{parse(generalInfo?.professionTitles[0].svgIconProfTitle)}</span>}
                <p>{generalInfo?.professionTitles[0].nameProfessionTitle}</p>
              </div>
              <div>
                {generalInfo?.professionTitles[1].fontAwesomeIcon?.value && (
                  <FontAwesome prefix={generalInfo?.professionTitles[1].fontAwesomeIcon.prefix} value={generalInfo?.professionTitles[1].fontAwesomeIcon.value} />
                )}
                {generalInfo?.professionTitles[1].svgIconProfTitle && <span>{parse(generalInfo?.professionTitles[1].svgIconProfTitle)}</span>}
                <p>{generalInfo?.professionTitles[1].nameProfessionTitle}</p>
              </div>
              <div></div>
            </AboutJobTwo>
          )}
          {generalInfo?.professionTitles.length === 3 && (
            <AboutJobThree>
              <div>
                {generalInfo?.professionTitles[0].fontAwesomeIcon?.value && (
                  <FontAwesome prefix={generalInfo?.professionTitles[0].fontAwesomeIcon.prefix} value={generalInfo?.professionTitles[0].fontAwesomeIcon.value} />
                )}
                {generalInfo?.professionTitles[0].svgIconProfTitle && <span>{parse(generalInfo?.professionTitles[0].svgIconProfTitle)}</span>}
                <p>{generalInfo?.professionTitles[0].nameProfessionTitle}</p>
              </div>
              <div>
                {generalInfo?.professionTitles[1].fontAwesomeIcon?.value && (
                  <FontAwesome prefix={generalInfo?.professionTitles[1].fontAwesomeIcon.prefix} value={generalInfo?.professionTitles[1].fontAwesomeIcon.value} />
                )}
                {generalInfo?.professionTitles[1].svgIconProfTitle && <span>{parse(generalInfo?.professionTitles[1].svgIconProfTitle)}</span>}
                <p>{generalInfo?.professionTitles[1].nameProfessionTitle}</p>
              </div>
              <div>
                {generalInfo?.professionTitles[2].fontAwesomeIcon?.value && (
                  <FontAwesome prefix={generalInfo?.professionTitles[2].fontAwesomeIcon.prefix} value={generalInfo?.professionTitles[2].fontAwesomeIcon.value} />
                )}
                {generalInfo?.professionTitles[2].svgIconProfTitle && <span>{parse(generalInfo?.professionTitles[2].svgIconProfTitle)}</span>}
                <p>{generalInfo?.professionTitles[2].nameProfessionTitle}</p>
              </div>
            </AboutJobThree>
          )}
          {generalInfo?.professionTitles.length === 4 && (
            <AboutJobFour>
              {generalInfo?.professionTitles.map((profTitle) => {
                return (
                  <div key={profTitle.id}>
                    <FontAwesome prefix={profTitle.fontAwesomeIcon.prefix} value={profTitle.fontAwesomeIcon.value} />
                    {profTitle.svgIconProfTitle && <span>{parse(profTitle.svgIconProfTitle)}</span>}
                    <p>{profTitle.nameProfessionTitle}</p>
                  </div>
                );
              })}
            </AboutJobFour>
          )}
        </AboutJobContainer>
      )}
    </>
  );
};

export default AboutJob;
