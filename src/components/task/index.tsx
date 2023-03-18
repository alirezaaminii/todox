import React from "react";
import {TaskInterface} from "@/types";
import {TaskStyles} from "@/components/task/style";
import Checkbox from "@/components/checkbox";
import {useBoolean} from "@/hooks/useBoolean";
import TextArea from "@/components/textarea";
import {DeleteIcon} from "@/components/icons";

interface Props extends TaskInterface {
  onChange: (task: TaskInterface) => void;
  onDelete: (taskId: number) => void;
}

export const Task: React.FunctionComponent<Props> = (props) => {
  const [isChecked, {toggle}] = useBoolean(props.status === "done");
  const handleToggleTask = () => {
    toggle();
    props.onChange({...props, status: props.status === 'done' ? 'pending' : 'done'})
  }

  const handleChangeTask = (name: string) => {
    props.onChange({...props, name})
  }
  return (
    <TaskStyles status={props.status}>
      <Checkbox onChange={handleToggleTask} name={props.id.toString()} checked={isChecked}/>
      <TextArea placeholder="Write the task name..." onSubmit={handleChangeTask} taskName={props.name}/>
      {props.status === 'pending' ?
        <DeleteIcon className="delete-icon" onClick={() => props.onDelete(props.id)}/> : null}
    </TaskStyles>
  )
}

export default Task;