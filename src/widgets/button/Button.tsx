import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default Button;
