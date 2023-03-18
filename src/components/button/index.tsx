import React, {ReactNode} from 'react';
import {ButtonStyles} from "@/components/button/style";

export type ButtonVariants = 'primary' | 'gpt';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant: ButtonVariants;
  type?: 'submit' | 'button'
}

function Button({ children, onClick, disabled = false, className, variant, type = 'button' }: ButtonProps) {
  return (
    <ButtonStyles
      type={type}
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