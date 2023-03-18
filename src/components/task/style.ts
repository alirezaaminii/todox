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
  
  .delete-icon {
    display: none;
    cursor: pointer;

    @media screen and (max-width: 500px) {
      display: block;
    }
  }
  
  &:hover {
    .delete-icon {
      display: block;
    }
  }
  
  .task-name {
    display: flex;
    gap: 4px;
    flex: 0 0 calc(100% - 62px);
    justify-content: space-between;
    
    .textarea {
      color: ${(props: Props) => props.status === "pending" ? colors.primary : colors.secondary};
      text-decoration-line: ${(props: Props) => props.status === "pending" ? 'unset' : 'line-through'};

      &:focus ~ .task-submit-button {
        cursor: pointer;
        opacity: 1;
      }
    }

    .task-submit-button {
      all: unset;
      display: flex;
      align-items: center;
      opacity: 0;
      cursor: unset;
    }
  }
`;