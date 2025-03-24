import React from "react";
import { twMerge } from "tailwind-merge";

const ButtonText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (
  props,
) => {
  const { children, className, ...rest } = props;

  return (
    <p
      className={twMerge(
        "text-base sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-tight",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default ButtonText;
