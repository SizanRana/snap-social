import React from "react";
import { twMerge } from "tailwind-merge";

const H4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <h4
      className={twMerge(
        "text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed",
        className,
      )}
      {...rest}
    >
      {children}
    </h4>
  );
};

export default H4;
