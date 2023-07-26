import React from "react";

type Props = {
  children: React.ReactNode;
  spacing?: number;
  className?: string;
};

export default function Paper({ children, spacing, className }: Props) {
  return (
    <div
      className={`bg-white rounded shadow-2xl shadow-indigo-700/40  ${
        spacing !== undefined ? `p-${spacing}` : "p-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}
