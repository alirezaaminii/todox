import React, {MouseEventHandler, MouseEvent} from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {DropDownContentStyles, DropDownStyles} from "@/components/dropdown/style";

interface Props {
  options: {
    label: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    disabled: boolean;
  }[];
  trigger: React.ReactNode;
}

export const DropDown: React.FunctionComponent<Props> = (props) => {
  const handleClickOption = (fn: Function, event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    fn();
  }
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
              <DropdownMenu.Item
                disabled={option.disabled}
                key={option.label}
                className="DropdownMenuItem"
                onClick={(event) => handleClickOption(option.onClick, event)}
              >
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