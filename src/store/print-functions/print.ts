import { tagContent } from "../../typescript/interfaces";

export const PRINT_FUNCTION = async (arg: Array<string>) => {
  console.log(arg[0]);
  return true;
};

export const PRINT: tagContent = {
  function: PRINT_FUNCTION,
  arguments: 1,
};
