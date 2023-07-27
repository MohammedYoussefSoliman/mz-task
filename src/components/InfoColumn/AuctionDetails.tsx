import React from "react";

type Props = {
  value: string | number;
  label: string;
};

export default function AuctionDetails({ value, label }: Props) {
  return (
    <div className="w-full flex items-center justify-between bg-gray-200 rounded h-10 px-4 py-2">
      <p className="text-xs font-thin text-grey-600">{label}</p>
      <p className="text-lg font-bold text-grey-600">{value}</p>
    </div>
  );
}
