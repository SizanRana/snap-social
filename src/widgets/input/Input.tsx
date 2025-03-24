import React from "react";
import { twMerge } from "tailwind-merge";
import InputBase from "./InputBase";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => {
  const { className, ...rest } = props;

  return <InputBase className={twMerge(className)} {...rest} />;
};

export default Input;
