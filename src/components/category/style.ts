import styled from "styled-components";
import {colors} from "@/styles/colors";

interface Props {
  isOpen?: boolean;
  isAllDone: boolean;
}

export const CategoryStyles = styled.div<Props>`
  margin: 18px auto 0;
  width: 98%;
  
  .category-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 8px;
    padding: 8px 0;
    cursor: pointer;
    
    .column {
      display: flex;
      align-items: center;
      gap: 8px;
      
      &.right-column {
        flex: 1;
        justify-content: flex-end;
        gap: 6px;
      }
    }

    &--icon {}
    &--name {
      input {
        all: unset;
        border: 0;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        display: flex;
        align-items: center;
        user-select: none;
        width: 250px;

        color: ${colors.primary};

        &:focus {
          outline: 0;
          border-bottom: 1px solid ${colors.primary};
        }
      }
    }
    &--angle {
      transition: all 200ms;
      transform: rotate(${(props: Props) => props.isOpen ? 180 : 0}deg);
    }
    &--task-number {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      background: ${(props: Props) => props.isAllDone ? colors.success : colors.primary};
      color: ${colors.white};
      display: flex;
      align-items: center;
      justify-content: center;
      
      p {
        font-style: normal;
        font-weight: 600;
        font-size: 11px;
        line-height: 14px;
      }
    }
    &--options {
      transform: rotate(90deg);
      display: flex;
      align-items: center;
      justify-content: center;

      width: 16px;
      height: 16px;
    }
  }
`;