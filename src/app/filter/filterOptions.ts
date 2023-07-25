import { AsyncOptionType } from "@components/Inputs/Inputs.types";

const filterOptions = (inputValue: string, options: AsyncOptionType[]) => {
  return options.filter((i) =>
    i.stringLabel.toLowerCase().includes(inputValue.toLowerCase())
  );
};

export default filterOptions;
