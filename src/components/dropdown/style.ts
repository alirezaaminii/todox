import styled from "styled-components";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {colors} from "@/styles/colors";

export const DropDownStyles = styled(DropdownMenu.Root)`
`;

export const DropDownContentStyles = styled(DropdownMenu.Content)`
  background: ${colors.white};
  box-shadow: 0 0 30px rgba(29, 40, 58, 0.15);
  padding: 8px;

  .DropdownMenuItem {
    padding: 8px;
    border-bottom: 1px solid ${colors.stroke};
    color: ${colors.primary};
    cursor: pointer;
    
    &:last-of-type {
      border-bottom: 0;
    }

    &[data-disabled] {
      cursor: not-allowed;
      color: ${colors.secondary}
    }
  }
`;