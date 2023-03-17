import React from "react";
import {TaskStyles} from "@/components/task/style";
import Checkbox from "@/components/checkbox";
import TextArea from "@/components/textarea";

interface Props {
  onChange: (taskName: string) => void;
  hideCheckbox?: boolean;
}

export const NewTask: React.FunctionComponent<Props> = (props) => {
  const handleChangeTask = (name: string) => {
    props.onChange(name);
  }
  return (
    <TaskStyles status='pending'>
      {props.hideCheckbox ? null : <Checkbox disabled name="New Task"/>}
      <TextArea placeholder="Write a task..." onSubmit={handleChangeTask} resetFieldAfterSubmit />
    </TaskStyles>
  )
}

export default NewTask;