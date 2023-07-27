import React from "react";

type Props = {
  children: React.ReactNode;
  spacing?: number;
  className?: string;
  withShadow?: boolean;
  transparent?: boolean;
};

export default function Paper({
  children,
  spacing,
  withShadow = true,
  className,
  transparent,
}: Props) {
  return (
    <div
      className={`${transparent ? "" : "bg-white"} rounded ${
        withShadow ? "shadow-2xl shadow-indigo-700/40" : ""
      }  ${spacing !== undefined ? `p-${spacing}` : "p-4"} ${className}`}
    >
      {children}
    </div>
  );
}
