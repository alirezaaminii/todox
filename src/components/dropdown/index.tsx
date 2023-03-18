import React, {MouseEventHandler} from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {DropDownContentStyles, DropDownStyles} from "@/components/dropdown/style";

interface Props {
  options: {
    label: string;
    onClick: MouseEventHandler<HTMLDivElement>
  }[];
  trigger: React.ReactNode;
}

export const DropDown: React.FunctionComponent<Props> = (props) => {
  return (
    <DropDownStyles>
      <DropdownMenu.Trigger asChild>
        <div aria-label="Customise options">
          {props.trigger}
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropDownContentStyles className="DropdownMenuContent" sideOffset={5}>
          {
            props.options.map(option =>
              <DropdownMenu.Item key={option.label} className="DropdownMenuItem" onClick={option.onClick}>
                {option.label}
              </DropdownMenu.Item>
            )
          }
        </DropDownContentStyles>
      </DropdownMenu.Portal>
    </DropDownStyles>
  )
}

export default DropDown;