import { execSync } from "child_process";
import { DO_arguments, tagContent } from "../../typescript/interfaces";
import { err } from "../../utils/err";

export const DO_FUNCTION = (arg: DO_arguments): boolean => {
  try {
    let cwd = "";
    if (arg.pwd[0]) cwd = arg.pwd[0];
    execSync(arg.cmd[0], { stdio: "ignore", cwd: process.cwd() + cwd });
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
