import React, {ReactNode} from 'react';
import {ButtonStyles} from "@/components/button/style";

export type ButtonVariants = 'primary' | 'gpt';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant: ButtonVariants;
}

function Button({ children, onClick, disabled = false, className, variant }: ButtonProps) {
  return (
    <ButtonStyles
      variant={variant}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonStyles>
  );
}

export default Button;