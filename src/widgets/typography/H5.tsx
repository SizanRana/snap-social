import React from "react";
import { twMerge } from "tailwind-merge";

const H5: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <h5
      className={twMerge(
        "text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-loose",
        className,
      )}
      {...rest}
    >
      {children}
    </h5>
  );
};

export default H5;
