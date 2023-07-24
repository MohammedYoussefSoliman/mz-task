import React from "react";
import Select from "react-select";
import Error from "../Error";
import Label from "../Label";
import { SelectProps } from "../SelectInputs.types";

export default function SelectBase({
  name,
  label,
  options,
  error,
  rounded,
  dense,
  onChange,
  value,
  required,
  placeholder,
  ...selectProps
}: SelectProps) {
  return (
    <div className="flex flex-col w-full sm:gap-1.5 md:gap-2">
      {label && <Label label={label} required={required} />}
      <Select
        name={name}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        value={value}
        {...selectProps}
      />
      {error && <Error error={error} />}
    </div>
  );
}
