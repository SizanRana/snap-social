import React from "react";
import { twMerge } from "tailwind-merge";

const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <h3
      className={twMerge(
        "text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
};

export default H3;
