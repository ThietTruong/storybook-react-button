import React, { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**Provide a text for the button */
  children: ReactNode;

  /**Which  variant look would you like use */
  variant: 'primary' | 'secondary';
}
/**This is a special button */
export const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gr ay',
        color: 'white',
        border: 'none',
        borderRadius: 100,
        padding: 10,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
