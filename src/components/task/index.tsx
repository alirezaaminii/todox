import React from "react";
import {TaskInterface} from "@/types";
import {TaskStyles} from "@/components/task/style";
import Checkbox from "@/components/checkbox";
import {useBoolean} from "@/hooks/useBoolean";
import TextArea from "@/components/textarea";
import {DeleteIcon, LoadingIcon} from "@/components/icons";
import {useDeleteTasks, useUpdateTask} from "@/hooks/data/tasks";
import {useQueryClient} from "react-query";

interface Props extends TaskInterface {}

export const Task: React.FunctionComponent<Props> = (props) => {
  const [isChecked, {toggle}] = useBoolean(props.status === "done");
  const deleteTasks = useDeleteTasks();
  const queryClient = useQueryClient();
  const updateTask = useUpdateTask();
  const handleUpdateTask = (task: TaskInterface) => {
    updateTask.mutateAsync(task).then(invalidateCategories)
  }
  const handleToggleTask = () => {
    toggle();
    handleUpdateTask({...props, status: props.status === 'done' ? 'pending' : 'done'})
  }

  const handleChangeTask = (name: string) => {
    handleUpdateTask({...props, name})
  }

  const handleDeleteTask = () => {
    deleteTasks.mutateAsync([props.id]).then(invalidateCategories)
  }
  const invalidateCategories = () => {
    queryClient.invalidateQueries({queryKey: ['categories'],});
  }
  const isLoading = deleteTasks.isLoading || updateTask.isLoading
  return (
    <TaskStyles status={props.status}>
      <Checkbox onChange={handleToggleTask} name={props.id.toString()} checked={isChecked}/>
      <TextArea placeholder="Write the task name..." onSubmit={handleChangeTask} taskName={props.name}/>
      {
        isLoading ? <LoadingIcon /> : null
      }
      {!isLoading && props.status === 'pending' ?
        <DeleteIcon className="delete-icon" onClick={handleDeleteTask}/> : null}
    </TaskStyles>
  )
}

export default Task;