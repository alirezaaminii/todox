import {NetworkService} from "@/services/http";
import {CategoryInterface} from "@/types";

export const getCategories = () =>
  NetworkService.request<null, null, CategoryInterface[]>({
    config: {
      method: 'GET',
      url: `categories`,
    },
  });