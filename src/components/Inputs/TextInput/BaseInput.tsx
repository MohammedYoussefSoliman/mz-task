import React from "react";
import InputError from "@components/Inputs/Error";
import Label from "@components/Inputs/Label";
import { InputPropsType } from "@components/Inputs/Inputs.types";

export default function BaseInput({
  name,
  label,
  placeholder,
  className,
  required,
  error,
  ...inputProps
}: InputPropsType) {
  return (
    <div
      className={`flex flex-col p-1 h-10 w-full border-cyan-600 rounded-sm ${className}`}
    >
      {label && <Label label={label} required={required} />}
      <input
        className="flex-1 outline-none border-none w-full h-full "
        type="text"
        {...inputProps}
      />
      {error && <InputError error={error} />}
    </div>
  );
}
