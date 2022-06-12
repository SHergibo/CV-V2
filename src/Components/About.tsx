import { useEffect, FC, Dispatch, SetStateAction, ReactElement } from 'react';
import { useAxios } from '../Hooks/useAxiosHooks';
import { apiDomain, apiVersion } from '../config/environment.config';
import { IGeneralInfo } from '../interfaces';
import { IFetchLoaded } from '../Pages/HomePage';

interface IAboutProps {
  setGeneralInfo: Dispatch<SetStateAction<IGeneralInfo | null>>;
  fetchLoaded: IFetchLoaded;
  setFetchLoaded: Dispatch<SetStateAction<IFetchLoaded>>;
}

const About: FC<IAboutProps> = ({ setGeneralInfo, fetchLoaded, setFetchLoaded }): ReactElement => {
  const { response, loading, error } = useAxios<IGeneralInfo>({
    method: 'get',
    url: `${apiDomain}/api/${apiVersion}/infos`
  });

  useEffect(() => {
    if (!loading && !error) {
      setFetchLoaded({
        ...fetchLoaded,
        info: { isLoaded: true, error: false }
      });
    }
    if (error) {
      setFetchLoaded({
        ...fetchLoaded,
        info: { isLoaded: false, error: true }
      });
    }
  }, [loading, error, fetchLoaded, setFetchLoaded]);

  useEffect(() => {
    if (!loading && !error) setGeneralInfo(response);
  }, [loading, error, response, setGeneralInfo]);

  return (
    <div>
      <h3>About</h3>
      {response?.firstname}
    </div>
  );
};

export default About;
