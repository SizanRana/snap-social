import React from "react";
import { twMerge } from "tailwind-merge";
import { Alex_Brush } from "next/font/google";

const alexBrush = Alex_Brush({
  weight: "400", // Alex Brush only has 400 weight
  subsets: ["latin"], // Specify the character subset
});

const AlexBrushFont: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => {
  const { children, className, ...rest } = props;
  return (
    <div className={twMerge(alexBrush.className, className)} {...rest}>
      {children}
    </div>
  );
};

export default AlexBrushFont;
