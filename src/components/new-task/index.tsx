import React from "react";
import {TaskStyles} from "@/components/task/style";
import Checkbox from "@/components/checkbox";
import TextArea from "@/components/textarea";
import {useCreateTask} from "@/hooks/data/tasks";
import {useQueryClient} from "react-query";
import {LoadingIcon} from "@/components/icons";

interface Props {
  hideCheckbox?: boolean;
  label?: string;
  placeholder?: string;
  categoryId?: number;
}

export const NewTask: React.FunctionComponent<Props> = (props) => {
  const createTask = useCreateTask();
  const queryClient = useQueryClient();

  const invalidateCategories = () => {
    queryClient.invalidateQueries({queryKey: ['categories'],});
  }

  const handleCreateTask = (taskName: string) => {
    createTask.mutateAsync({name: taskName, categoryId: props.categoryId}).then(invalidateCategories)
  }
  return (
    <>
      {props.label ? <label htmlFor="new-task">{props.label}</label> : null}
      <TaskStyles status='pending'>
        {props.hideCheckbox ? null : <Checkbox disabled name="new-task"/>}
        <TextArea placeholder={props.placeholder ?? "Write a task..."} onSubmit={handleCreateTask}
                  resetFieldAfterSubmit/>
        {
          createTask.isLoading ? <LoadingIcon /> : null
        }
      </TaskStyles>
    </>
  )
}

export default NewTask;