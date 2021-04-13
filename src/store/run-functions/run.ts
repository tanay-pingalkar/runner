import { spawnSync } from "child_process";
import { warn } from "../../utils/warn";
import { err } from "../../utils/err";
import { RUN_arguments, tagContent } from "../../typescript/interfaces";

export const RUN_FUNCTION = (arg: RUN_arguments): boolean => {
  const splitted = arg.cmd[0].split(/\s/g);
  let cwd = "";
  if (arg.pwd[0]) cwd = arg.pwd[0];
  const spawn = spawnSync(splitted[0], splitted.splice(1), {
    cwd: process.cwd() + cwd,
  });
  if (spawn.stdout) console.log(spawn.stdout.toString());
  if (spawn.error) return err(spawn.error.message.toString());
  if (spawn.stderr && spawn.stderr.toString().trim() != "") {
    warn(spawn.stderr.toString());
  }
  return true;
};
export const RUN: tagContent = {
  function: RUN_FUNCTION,
  arguments: {
    all: ["cmd", "pwd"],
    compulsary: ["cmd"],
  },
};
