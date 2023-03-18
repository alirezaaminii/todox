import styled from "styled-components";
import {colors} from "@/styles/colors";
import {ButtonVariants} from "@/components/button/index";

interface Props {
  variant: ButtonVariants;
}

export const ButtonStyles = styled.button<Props>`
  padding: 12px;
  background: ${(props: Props) => colors[props.variant]};
  color: ${colors.white};
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`;