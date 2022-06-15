import { useState, useEffect, useRef } from 'react';
import { PuffLoader } from 'react-spinners';
import { IFetchLoaded } from '../../Pages/HomePage';
import { LoadingContainer } from './Loading.styled';

interface ILoadingProps {
  fetchLoaded: IFetchLoaded;
}

const Loading = ({ fetchLoaded }: ILoadingProps) => {
  const [animLoading, setAnimLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    let allLoaded: boolean = false;
    Object.values(fetchLoaded).forEach((value) => {
      if (value.isLoaded) {
        allLoaded = true;
      } else {
        allLoaded = false;
      }
    });

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
        <LoadingContainer ref={loadingRef}>
          <PuffLoader color={'#1e87f0'} loading={animLoading} />
        </LoadingContainer>
      )}
    </>
  );
};

export default Loading;
