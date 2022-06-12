import { FC, ReactElement, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useAxios } from '../Hooks/useAxiosHooks';
import { apiDomain, apiVersion } from '../config/environment.config';
import { IPortfolio } from '../interfaces';
import { IFetchLoaded } from '../Pages/HomePage';

export interface IPortfolioProps {
  fetchLoaded: IFetchLoaded;
  setFetchLoaded: Dispatch<SetStateAction<IFetchLoaded>>;
}

const Portfolio: FC<IPortfolioProps> = ({ fetchLoaded, setFetchLoaded }): ReactElement => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const { response, loading, error } = useAxios<IPortfolio>({
    method: 'get',
    url: `${apiDomain}/api/${apiVersion}/projects/pagination?page=${pageIndex - 1}`
  });

  useEffect(() => {
    if (!loading && !error) {
      setFetchLoaded({
        ...fetchLoaded,
        portfolio: { isLoaded: true, error: false }
      });
    }
    if (error) {
      setFetchLoaded({
        ...fetchLoaded,
        portfolio: { isLoaded: false, error: true }
      });
    }
  }, [loading, error, fetchLoaded, setFetchLoaded]);

  return (
    <div>
      <h3>Portfolio</h3>
      <p>{response?.arrayData[0]._id}</p>
    </div>
  );
};

export default Portfolio;
