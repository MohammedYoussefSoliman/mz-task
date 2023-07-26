import React from "react";
import { ButtonProps } from "./Button.types";

export default function Button({
  children,
  onClick,
  variant,
  rounded,
  ...rest
}: ButtonProps) {
  const variantClasses =
    variant === "secondary"
      ? "from-cyan-700 to-blue-500"
      : "from-rose-900 to-rose-600";

  const roundedClasses = rounded ? "rounded-full" : "rounded";
  return (
    <button
      className={`${roundedClasses} p-2 h-10 flex items-center text-xs font-medium uppercase leading-normal bg-gradient-to-tr ${variantClasses}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
