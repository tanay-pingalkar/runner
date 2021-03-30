import { execSync } from "child_process";
import { warn } from "../../utils/warn";
import { tagContent } from "../../typescript/interfaces";

export const DO_FUNCTION = (arg: Array<string>) => {
  try {
    execSync(arg[0], { stdio: "ignore" });
  } catch {
    warn("an unusual error has occure");
  }
  return;
};
export const DO: tagContent = {
  function: DO_FUNCTION,
  arguments: 1,
};
