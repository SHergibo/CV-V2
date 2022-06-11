import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { apiDomain, apiVersion } from './../config/environment.config';

export function useAxiosFetch<payload>(url: string): { data: payload | null; done: boolean } {
  const [data, setData] = useState<payload | null>(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    const axiosFetchData = async (url: string) => {
      try {
        await axios.get<payload>(`${apiDomain}/api/${apiVersion}${url}`).then((response: AxiosResponse) => {
          setData(response.data);
          setDone(true);
        });
      } catch (error) {
        console.log(error);
      }
    };
    axiosFetchData(url);
  }, [url]);

  return {
    data,
    done
  };
}
