import React from "react";
import { LabelProps } from "./SelectInputs.types";

export default function Label({ label, required }: LabelProps) {
  return (
    <label className="flex  items-center">
      <span>{label}</span>
      {required && <sup className="text-xs font-bold text-red-600">*</sup>}
    </label>
  );
}
