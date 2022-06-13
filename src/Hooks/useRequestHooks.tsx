import useSWR, { SWRResponse } from 'swr';
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';

interface Return<Data, Error> extends Pick<SWRResponse<AxiosResponse<Data>, AxiosError<Error>>, 'error'> {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
  loading: boolean;
}

export function useRequest<Data = unknown, Error = unknown>(request: AxiosRequestConfig): Return<Data, Error> {
  const { data: response, error } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(request && JSON.stringify(request), () => axios.request<Data>(request!));
  let loading: boolean = true;

  if (response && !error) loading = false;

  return {
    data: response && response.data,
    response,
    loading,
    error
  };
}
