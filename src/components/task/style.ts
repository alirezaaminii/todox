import styled from "styled-components";
import {colors} from "@/styles/colors";

interface Props {
  status: string;
}

export const TaskStyles = styled.div<Props>`
  display: flex;
  gap: 8px;
  margin: 8px 0;
  padding: 4px 0;
  align-items: center;
  
  input[type="checkbox"] {
    cursor: pointer;
  }
  
  .task-name {
    display: flex;
    gap: 4px;
    flex: 0 0 calc(100% - 32px);
    justify-content: space-between;
    
    input {
      color: ${(props: Props) => props.status === "pending" ? colors.primary : colors.secondary};
      text-decoration-line: ${(props: Props) => props.status === "pending" ? 'unset' : 'line-through'};

      &:focus ~ .task-submit-button {
        display: flex;
        align-items: center;
      }
    }

    .task-submit-button {
      all: unset;
      display: none;
      cursor: pointer;
    }
  }
`;