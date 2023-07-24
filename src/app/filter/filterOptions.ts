import { AsyncOptionType } from "@components/Selects/SelectInputs.types";

const filterOptions = (inputValue: string, options: AsyncOptionType[]) => {
  return options.filter((i) =>
    i.stringLabel.toLowerCase().includes(inputValue.toLowerCase())
  );
};

export default filterOptions;
