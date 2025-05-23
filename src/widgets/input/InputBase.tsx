import React from "react";
import { twMerge } from "tailwind-merge";

const InputBase: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => {
  const { className, ...rest } = props;
  return (
    <input
      className={twMerge(
        "outline-none border border-gray-600 px-2 py-1 rounded-sm w-full",
        className,
      )}
      {...rest}
    />
  );
};

export default InputBase;
