import { PRINT_arguments, tagContent } from "../../typescript/interfaces";

export const PRINT_FUNCTION = (arg: PRINT_arguments) => {
  console.log(arg.txt[0]);
  return true;
};

export const PRINT: tagContent = {
  function: PRINT_FUNCTION,
  arguments: {
    all: ["txt"],
    compulsary: ["txt"],
  },
};
