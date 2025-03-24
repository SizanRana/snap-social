import React from "react";
import { twMerge } from "tailwind-merge";

const Hr: React.FC<React.HTMLAttributes<HTMLHRElement>> = (props) => {
  const { className, ...rest } = props;

  return (
    <hr
      className={twMerge("border-0.5 border-gray-600 w-full", className)}
      {...rest}
    />
  );
};

export default Hr;
