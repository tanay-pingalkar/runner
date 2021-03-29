import { tagContent } from "../../typescript/interfaces";

export const PRINT_FUNCTION = (arg: Array<string>) => {
  console.log(arg[0]);
  return;
};

export const PRINT: tagContent = {
  function: PRINT_FUNCTION,
  arguments: 1,
};
