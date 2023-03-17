import styled from "styled-components";
import {colors} from "@/styles/colors";

export const InputStyles = styled.input`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  border: none;
  &:focus {
    outline: 0;
    border-bottom: 1px solid ${colors.primary};
  }
`;