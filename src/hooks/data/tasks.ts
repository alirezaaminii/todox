import {useMutation} from "react-query";
import {CreateTask, TaskInterface} from "@/types";
import {createTask, updateTask} from "@/services/endpoints/tasks";

export function useCreateTask() {
  return useMutation([], (newTask: CreateTask) => createTask(newTask));
}

export function useUpdateTask() {
  return useMutation([], (task: TaskInterface) => updateTask(task));
}