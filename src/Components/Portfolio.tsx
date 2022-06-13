import { FC, ReactElement, Dispatch, SetStateAction, useState } from 'react';
import { useRequest } from '../Hooks/useRequestHooks';
import useIsLoaded from '../Hooks/useIsLoadedHook';
import { apiDomain, apiVersion } from '../config/environment.config';
import { IPortfolio } from '../interfaces';
import { IFetchLoaded } from '../Pages/HomePage';

export interface IPortfolioProps {
  setFetchLoaded: Dispatch<SetStateAction<IFetchLoaded>>;
}

const Portfolio: FC<IPortfolioProps> = ({ setFetchLoaded }): ReactElement => {
  const [pageIndex, setPageIndex] = useState<number>(1);

  const { data, error } = useRequest<IPortfolio>({
    method: 'get',
    url: `${apiDomain}/api/${apiVersion}/projects/pagination?page=${pageIndex - 1}`
  });

  useIsLoaded({ data: data, error, setStateFunc: setFetchLoaded, objectKey: 'portfolio' });

  return (
    <div>
      <h3>Portfolio</h3>
      <p>{data?.arrayData[0]._id}</p>
    </div>
  );
};

export default Portfolio;
