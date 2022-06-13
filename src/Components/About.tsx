import { useEffect, FC, Dispatch, SetStateAction, ReactElement } from 'react';
import { useRequest } from '../Hooks/useRequestHooks';
import useIsLoaded from '../Hooks/useIsLoadedHook';
import { apiDomain, apiVersion } from '../config/environment.config';
import { IGeneralInfo } from '../interfaces';
import { IFetchLoaded } from '../Pages/HomePage';

interface IAboutProps {
  setGeneralInfo: Dispatch<SetStateAction<IGeneralInfo | null>>;
  setFetchLoaded: Dispatch<SetStateAction<IFetchLoaded>>;
}

const About: FC<IAboutProps> = ({ setGeneralInfo, setFetchLoaded }): ReactElement => {
  const { data, error } = useRequest<IGeneralInfo>({
    method: 'get',
    url: `${apiDomain}/api/${apiVersion}/infos`
  });

  useIsLoaded({ data: data, error, setStateFunc: setFetchLoaded, objectKey: 'info' });

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
