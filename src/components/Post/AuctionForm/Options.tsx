import React from "react";
import Option from "./Option";

type Props = {
  values: number[];
  onClick: (value: number) => void;
};

export default function Options({ values, onClick }: Props) {
  return (
    <div className="flex gap-3">
      {values.map((value) => (
        <Option key={value} value={value} onClick={onClick} />
      ))}
    </div>
  );
}
