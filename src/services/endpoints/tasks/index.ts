import {NetworkService} from "@/services/http";
import {CreateTask} from "@/types";

export const createTask = (newTask: CreateTask) =>
  NetworkService.request<null, CreateTask, null>({
    config: {
      method: 'POST',
      url: `tasks/create`,
      data: newTask
    },
  });