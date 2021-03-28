import chalk from "chalk";
import { spawnSync, execSync } from "child_process";
import { err } from "../utils/err";
import { tags as tag } from "../typescript/interfaces";
import {} from "child_process";
import { warn } from "../utils/warn";

export const tags: tag = {
  RUN: (arg) => {
    const splitted = arg[0].split(/\s/g);
    const spawn = spawnSync(splitted[0], splitted.splice(1));
    if (spawn.stdout) console.log(spawn.stdout.toString());
    if (spawn.error) err(spawn.error.message.toString());
    if (spawn.stderr && spawn.stderr.toString().trim() != "") {
      warn(spawn.stderr.toString());
    }
    return;
  },
  DO: async (arg) => {
    await execSync(arg[0]);
    return;
  },
  PRINT: async (arg) => {
    await console.log(arg[0]);
    return;
  },
  RED: (arg) => {
    console.log(chalk.redBright(arg[0]));
  },
  BLUE: (arg) => {
    console.log(chalk.blue(arg[0]));
  },
  // READ: (arg) => {},
  // ASK: (arg) => {},
};
