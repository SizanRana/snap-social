import React from "react";
import { twMerge } from "tailwind-merge";

const H6: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <h6
      className={twMerge(
        "text-base sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-loose",
        className,
      )}
      {...rest}
    >
      {children}
    </h6>
  );
};

export default H6;
