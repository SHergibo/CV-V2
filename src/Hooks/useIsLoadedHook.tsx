import { useEffect, Dispatch, SetStateAction } from 'react';
import { AxiosError } from 'axios';
import { IGeneralInfo, IPortfolio, IEducExpResume, ISkillResume } from '../interfaces';
import { IFetchLoaded } from './../Pages/HomePage';

interface IUsedIsLoadedProps {
  data: IGeneralInfo | IPortfolio | IEducExpResume[] | ISkillResume[] | undefined;
  error: AxiosError | undefined;
  setStateFunc: Dispatch<SetStateAction<IFetchLoaded>>;
  objectKey: string;
}

const useIsLoaded = ({ data, error, setStateFunc, objectKey }: IUsedIsLoadedProps): void => {
  useEffect(() => {
    if (data && !error) {
      setStateFunc((prevState: IFetchLoaded) => ({
        ...prevState,
        [objectKey]: { isLoaded: true, error: false }
      }));
    }
    if (error) {
      setStateFunc((prevState: IFetchLoaded) => ({
        ...prevState,
        [objectKey]: { isLoaded: false, error: true }
      }));
    }
  }, [data, error, setStateFunc, objectKey]);
};

export default useIsLoaded;
