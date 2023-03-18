import {NetworkService} from "@/services/http";
import {CreateTask, TaskInterface} from "@/types";

export const createTask = (newTask: CreateTask) =>
  NetworkService.request<null, CreateTask, null>({
    config: {
      method: 'POST',
      url: `tasks/create`,
      data: newTask
    },
  });

export const updateTask = (task: TaskInterface) =>
  NetworkService.request<null, TaskInterface, null>({
    config: {
      method: 'PUT',
      url: `tasks/${task.id}/update`,
      data: task
    },
  });

export const deleteTasks = (ids: number[]) =>
  NetworkService.request<null, { ids: number[] }, null>({
    config: {
      method: 'DELETE',
      url: `tasks/delete`,
      data: {ids}
    },
  });