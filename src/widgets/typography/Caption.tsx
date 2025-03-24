import React from "react";
import { twMerge } from "tailwind-merge";

const Caption: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (
  props,
) => {
  const { className, children, ...rest } = props;

  return (
    <p
      className={twMerge(
        "text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg font-light leading-snug",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Caption;
