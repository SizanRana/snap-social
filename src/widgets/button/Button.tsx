import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const ButtonBase: React.FC<ButtonProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={twMerge("w-full rounded-md py-1.5", className)}
      {...rest}
    >
      {children}
    </button>
  );
};

const PrimaryButton: React.FC<ButtonProps> = (props) => {
  const { className, disabled, ...rest } = props;
  return (
    <ButtonBase
      className={twMerge("bg-blue-500", disabled && "opacity-70", className)}
      {...rest}
    />
  );
};

const Button: React.FC<ButtonProps> = (props) => {
  return <PrimaryButton {...props} />;
};

export default Button;
