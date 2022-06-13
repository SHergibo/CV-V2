import { FC, ReactElement, useState, useEffect, useRef } from 'react';
import { PuffLoader } from 'react-spinners';
import { IFetchLoaded } from './../Pages/HomePage';

export interface ILoadingProps {
  fetchLoaded: IFetchLoaded;
}

const Loading: FC<ILoadingProps> = ({ fetchLoaded }): ReactElement => {
  const [animLoading, setAnimLoading] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const loadingRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    let allLoaded: boolean = false;
    for (const [key, value] of Object.entries(fetchLoaded)) {
      if (value.isLoaded) {
        allLoaded = true;
      } else {
        allLoaded = false;
      }
    }

    if (allLoaded) {
      setLoading(false);
    }
  }, [fetchLoaded]);

  useEffect(() => {
    let animationLoading: NodeJS.Timeout;
    let deleteContainerLoading: NodeJS.Timeout;
    if (loading) {
      setAnimLoading(true);
    } else {
      animationLoading = setTimeout(() => {
        loadingRef.current.style.opacity = '0';
      }, 400);

      deleteContainerLoading = setTimeout(() => {
        setAnimLoading(false);
      }, 1000);
    }

    return () => {
      clearInterval(animationLoading);
      clearInterval(deleteContainerLoading);
    };
  }, [loading]);

  return (
    <>
      {animLoading && (
        <div ref={loadingRef}>
          <div>
            <PuffLoader color={'#1e87f0'} loading={animLoading} />
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
