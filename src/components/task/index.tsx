import React from "react";
import {TaskInterface} from "@/types";
import {TaskStyles} from "@/components/task/style";

interface Props extends TaskInterface {
}

export const Task: React.FunctionComponent<Props> = (props) => {
  return (
    <TaskStyles status={props.status}>
      <input type="checkbox" name={props.id.toString()} checked={props.status==="done"}/>
      <div className="task-name">{props.name}</div>
    </TaskStyles>
  )
}

export default Task;