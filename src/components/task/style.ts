import styled from "styled-components";
import {TaskStatus} from "@/types/task";
import {colors} from "@/styles/colors";

interface Props {
  status: TaskStatus;
}

export const TaskStyles = styled.div<Props>`
  display: flex;
  gap: 8px;
  
  .task-name {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: ${(props: Props) => props.status === "pending" ? colors.primary : colors.secondary};
    text-decoration-line: ${(props: Props) => props.status === "pending" ? 'unset' : 'line-through'};
  }
`;