import {AxiosHttpClient} from "@/utils/http-class";
import {getAPIBaseURL} from "@/utils/env";
export const NetworkService = new AxiosHttpClient(
  {},
  getAPIBaseURL() as string,
);
