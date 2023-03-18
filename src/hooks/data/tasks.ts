import {useMutation} from "react-query";
import {CreateTask, TaskInterface} from "@/types";
import {createTask, deleteTasks, updateTask} from "@/services/endpoints/tasks";

export function useCreateTask() {
  return useMutation([], (newTask: CreateTask) => createTask(newTask));
}

export function useUpdateTask() {
  return useMutation([], (task: TaskInterface) => updateTask(task));
}

export function useDeleteTasks() {
  return useMutation([], (taskIds: number[]) => deleteTasks(taskIds));
}