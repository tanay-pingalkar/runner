import { spawnSync } from "child_process";
import { warn } from "../../utils/warn";
import { err } from "../../utils/err";

export const RUN = (arg: Array<string>) => {
  const splitted = arg[0].split(/\s/g);
  const spawn = spawnSync(splitted[0], splitted.splice(1));
  if (spawn.stdout) console.log(spawn.stdout.toString());
  if (spawn.error) err(spawn.error.message.toString());
  if (spawn.stderr && spawn.stderr.toString().trim() != "") {
    warn(spawn.stderr.toString());
  }
  return;
};
