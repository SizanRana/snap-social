import React from "react";
import { twMerge } from "tailwind-merge";

const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <h1
      className={twMerge(
        "text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight",
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};

export default H1;
