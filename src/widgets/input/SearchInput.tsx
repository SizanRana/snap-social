"use client";

import React, { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => {
  const { placeholder, className, ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [isClicked, setIsClicked] = useState(false);

  const handleFocusInput = (): void => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      onClick={handleFocusInput}
      className="bg-charcoal rounded-md flex items-center space-x-1 px-3"
    >
      {!isClicked && (
        <MagnifyingGlassIcon onClick={handleFocusInput} className="h-6" />
      )}

      <input
        ref={inputRef}
        className={twMerge("p-2 bg-transparent w-full outline-none", className)}
        placeholder={placeholder ?? "Search"}
        onFocus={() => setIsClicked(true)}
        onBlur={() => setIsClicked(false)}
        {...rest}
      />
    </div>
  );
};

export default SearchInput;
