import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface AxiosConfigInterface<P, D> extends AxiosRequestConfig {
  params?: P | null;
  data?: D | null;
}

export abstract class HttpClient<C> {
  protected _config: C;
  protected _baseUrl?: string;

  constructor(
    config: C,
    baseUrl: string,
  ) {
    this._config = config;
    this._baseUrl = baseUrl;
  }

  public handle<T>(promise: Promise<T>): Promise<T> {
    return promise
      .then((response: T) => {
        return Promise.resolve(response);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  abstract request<R>(data: { isMock?: boolean; config: C }): Promise<any | R>;
}

export class AxiosHttpClient extends HttpClient<AxiosRequestConfig> {
  request<P, D, R>(data: {
    isMock?: boolean;
    config: AxiosConfigInterface<P, D>;
  }): Promise<AxiosResponse<R>> {
    const promise = axios.request<R>({
      ...this._config,
      baseURL: this._baseUrl,
      ...data.config,
    });

    return super.handle<AxiosResponse<R>>(promise);
  }
}
