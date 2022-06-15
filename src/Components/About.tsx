import { useEffect, Dispatch, SetStateAction } from 'react';
import { useRequest } from '../Hooks/useRequestHooks';
import useIsLoaded from '../Hooks/useIsLoadedHook';
import { apiDomain, apiVersion } from '../config/environment.config';
import { IGeneralInfo } from '../interfaces';
import { IFetchLoaded } from '../Pages/HomePage';

interface IAboutProps {
  setGeneralInfo: Dispatch<SetStateAction<IGeneralInfo | null>>;
  setFetchLoaded: Dispatch<SetStateAction<IFetchLoaded>>;
}

const About = ({ setGeneralInfo, setFetchLoaded }: IAboutProps) => {
  const { data, error, loading } = useRequest<IGeneralInfo>({
    method: 'get',
    url: `${apiDomain}/api/${apiVersion}/infos`
  });

  useIsLoaded({ loading, error, setStateFunc: setFetchLoaded, objectKey: 'info' });

  useEffect(() => {
    if (data && !error) setGeneralInfo(data);
  }, [data, error, setGeneralInfo]);

  return (
    <div>
      <h3>About</h3>
      {data?.firstname}
    </div>
  );
};

export default About;
