import { execSync } from "child_process";
import { tagContent } from "../../typescript/interfaces";

export const DO_FUNCTION = (arg: Array<string>) => {
  execSync(arg[0]);
  return;
};
export const DO: tagContent = {
  function: DO_FUNCTION,
  arguments: 1,
};
