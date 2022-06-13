import { useEffect, Dispatch, SetStateAction } from 'react';
import { AxiosError } from 'axios';

interface IUsedIsLoadedProps {
  loading: boolean;
  error: AxiosError | undefined;
  setStateFunc: Dispatch<SetStateAction<any>>;
  objectKey: string;
}

const useIsLoaded = ({ loading, error, setStateFunc, objectKey }: IUsedIsLoadedProps): void => {
  useEffect(() => {
    if (!loading && !error) {
      setStateFunc((prevState: any) => ({
        ...prevState,
        [objectKey]: { isLoaded: true, error: false }
      }));
    }
    if (error) {
      setStateFunc((prevState: any) => ({
        ...prevState,
        [objectKey]: { isLoaded: false, error: true }
      }));
    }
  }, [loading, error, setStateFunc, objectKey]);
};

export default useIsLoaded;
