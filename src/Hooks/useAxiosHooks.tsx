import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

export function useAxios<payload>(axiosParams: AxiosRequestConfig) {
  const [response, setResponse] = useState<payload | null>(null);
  const [error, setError] = useState<AxiosError | null>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result: AxiosResponse = await axios.request<payload>(params);
      setResponse(result.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, error, loading };
}
