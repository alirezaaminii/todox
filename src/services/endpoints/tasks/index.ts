import {NetworkService} from "@/services/http";
import {TaskInterface} from "@/types";

export const getTasks = () =>
  NetworkService.request<null, null, TaskInterface[]>({
    config: {
      method: 'GET',
      url: `tasks`,
    },
  });