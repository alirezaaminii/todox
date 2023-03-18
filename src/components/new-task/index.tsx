import React from "react";
import {TaskStyles} from "@/components/task/style";
import Checkbox from "@/components/checkbox";
import TextArea from "@/components/textarea";

interface Props {
  onChange: (taskName: string) => void;
  hideCheckbox?: boolean;
  label?: string;
  placeholder?: string;
}

export const NewTask: React.FunctionComponent<Props> = (props) => {
  const handleChangeTask = (name: string) => {
    props.onChange(name);
  }
  return (
    <>
      {props.label ? <label htmlFor="new-task">{props.label}</label> : null}
      <TaskStyles status='pending'>
        {props.hideCheckbox ? null : <Checkbox disabled name="new-task"/>}
        <TextArea placeholder={props.placeholder ?? "Write a task..."} onSubmit={handleChangeTask}
                  resetFieldAfterSubmit/>
      </TaskStyles>
    </>
  )
}

export default NewTask;