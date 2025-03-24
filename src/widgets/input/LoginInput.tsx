import React from "react";
import { twMerge } from "tailwind-merge";
import InputBase from "./InputBase";

const LoginInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => {
  const { className, placeholder, ...rest } = props;

  const placeHolderText = placeholder;

  return (
    <InputBase
      placeholder={placeHolderText}
      className={twMerge(className)}
      {...rest}
    />
  );
};

export default LoginInput;
