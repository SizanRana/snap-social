import React from "react";
import { twMerge } from "tailwind-merge";

const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <h2
      className={twMerge(
        "text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-snug",
        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  );
};

export default H2;
