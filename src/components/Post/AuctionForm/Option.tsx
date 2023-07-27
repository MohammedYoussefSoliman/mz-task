import React from "react";

type Props = {
  value: number;
  onClick: (value: number) => void;
};

export default function Option({ value, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(value)}
      className="px-4 py-2 bg-pink-200 flex items-center justify-center rounded"
    >
      <p className="font-md text-pink-600 text-md">{value}+</p>
    </button>
  );
}
