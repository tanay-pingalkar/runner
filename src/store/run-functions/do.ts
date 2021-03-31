import { execSync } from "child_process";
import { tagContent } from "../../typescript/interfaces";
import { err } from "../../utils/err";

export const DO_FUNCTION = async (arg: Array<string>) => {
  try {
    execSync(arg[0], { stdio: "ignore" });
  } catch {
    return err("an unusual error has occure");
  }
  return true;
};
export const DO: tagContent = {
  function: DO_FUNCTION,
  arguments: 1,
};
