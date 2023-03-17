import {useMutation} from "react-query";
import {CreateTask} from "@/types";
import {createTask} from "@/services/endpoints/tasks";

export function useCreateTask() {
  return useMutation([], (newTask: CreateTask) => createTask(newTask), );
}