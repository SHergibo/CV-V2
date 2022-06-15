import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { IGeneralInfo } from '../../interfaces';
import WelcomeSection from '../WelcomeSection';

interface IWelcomeProps {
  generalInfo: IGeneralInfo | null;
}

const Welcome = ({ generalInfo }: IWelcomeProps) => {
  const location = useLocation();
  const [profTitleArray, setProfTitleArray] = useState<string[]>([]);
  console.log(generalInfo);

  useEffect(() => {
    if (generalInfo && location.pathname === '/') {
      setProfTitleArray([]);
      generalInfo.professionTitles.forEach((profTitle) => {
        setProfTitleArray((prevArray) => [...prevArray, profTitle.nameProfessionTitle]);
      });
    }
  }, [generalInfo, location.pathname]);

  return (
    <WelcomeSection pageTitle={location.pathname === '/' ? 'Bienvenue' : 'Administration'} headingText={generalInfo ? `${generalInfo.firstname} ${generalInfo.lastname}` : 'Mon site CV'}>
      {<div>test</div>}
    </WelcomeSection>
  );
};

export default Welcome;
