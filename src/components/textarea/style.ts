import styled from "styled-components";
import {colors} from "@/styles/colors";

export const TextAreaStyles = styled.textarea`
  min-height: 22px;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  border: none;
  flex: 0 0 calc(100% - 32px);
  max-width: calc(100% - 32px);
  resize: none;
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  
  &:focus {
    outline: 0;
    border-bottom: 1px solid ${colors.primary};
  }
`;