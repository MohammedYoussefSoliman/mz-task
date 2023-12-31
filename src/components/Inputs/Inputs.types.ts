import React from "react";
import { AsyncProps } from "react-select/async";
import { Props, GroupBase } from "react-select";
import {
  ValidationRule,
  FieldValue,
  FieldValues,
  ValidateResult,
  Control,
} from "react-hook-form";

export type LabelProps = {
  label: string;
  required?: true | string;
};
export type ErrorProps = {
  error: string;
};

export type OptionType = {
  label: React.ReactNode;
  value: string | number;
};
export type AsyncOptionType = {
  label: React.ReactNode;
  stringLabel: string;
  value: string;
};

export interface SelectProps
  extends Omit<
    Props<OptionType, boolean, GroupBase<OptionType>>,
    "components" | "isMulti" | "required"
  > {
  name: string;
  options: OptionType[];
  label?: string;
  error?: string;
  rounded?: boolean;
  dense?: boolean;
  isMulti?: true;
  required?: true | string;
  changeHandler?: (value: any) => void;
}
export interface AsyncSelectProps
  extends Omit<
    AsyncProps<OptionType, boolean, GroupBase<OptionType>>,
    "required"
  > {
  name: string;
  loadOptions: (
    inputValue: string,
    callback: (options: AsyncOptionType[]) => void
  ) => Promise<AsyncOptionType[]>;
  label?: string;
  error?: string;
  required?: true | string;
  changeHandler?: (value: any) => void;
}

export type FormValidationRules = {
  required: string | ValidationRule<boolean>;
  pattern: ValidationRule<RegExp>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number>;
  minLength: ValidationRule<number>;
  validate: (
    value: FieldValue<FieldValues>
  ) => ValidateResult | Promise<ValidateResult>;
};

export type ControllerType<T extends FieldValues> = {
  control: Control<T, any>;
  validationRules?: Partial<FormValidationRules>;
};

export interface InputPropsType
  extends Omit<React.InputHTMLAttributes<any>, "required"> {
  name: string;
  label?: string;
  error?: string;
  className?: string;
  required?: true | string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
