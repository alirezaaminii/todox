import React from "react";
import {TaskInterface} from "@/types";
import {TaskStyles} from "@/components/task/style";
import Checkbox from "@/components/checkbox";
import {useBoolean} from "@/hooks/useBoolean";

interface Props extends TaskInterface {
}

export const Task: React.FunctionComponent<Props> = (props) => {
  const [isChecked, { toggle } ] = useBoolean(props.status==="done");
  const handleToggleTask = () => {
    toggle();
    // update task
  }
  return (
    <TaskStyles status={props.status}>
      <Checkbox onChange={handleToggleTask} name={props.id.toString()} checked={isChecked}/>
      <div className="task-name">{props.name}</div>
    </TaskStyles>
  )
}

export default Task;