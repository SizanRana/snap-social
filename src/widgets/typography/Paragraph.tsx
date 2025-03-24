import React from "react";
import { twMerge } from "tailwind-merge";

const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (
  props,
) => {
  const { children, className, ...rest } = props;

  return (
    <p
      className={twMerge(
        "text-base sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-normal",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Paragraph;
