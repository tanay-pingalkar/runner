import { execSync } from "child_process";
import { DO_arguments, tagContent } from "../../typescript/interfaces";
import { err } from "../../utils/err";

export const DO_FUNCTION = (arg: DO_arguments): boolean => {
  try {
    execSync(arg.cmd[0], { stdio: "ignore" });
  } catch {
    return err("an unusual error has occure");
  }
  return true;
};
export const DO: tagContent = {
  function: DO_FUNCTION,
  arguments: {
    all: ["cmd", "pwd"],
    compulsary: ["cmd"],
  },
};
