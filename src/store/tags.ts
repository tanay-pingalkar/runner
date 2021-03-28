import chalk from "chalk";
import { exec, spawn } from "child_process";
import { err } from "../utils/err";
import { tags as tag } from "../typescript/interfaces";

export const tags: tag = {
  RUN: async (arg) => {
    const splitted = arg[0].split(/\s/g);
    const ls = spawn(splitted[0], splitted.splice(1));
    ls.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on("data", (data) => {
      console.log(chalk.blueBright(`${splitted[0]} error:${data}`));
    });

    ls.on("error", (error) => {
      console.log(
        err(`maybe ${arg} is not a correct command \n`),
        "error log: ",
        JSON.stringify(error)
      );
    });

    return;
  },
  DO: async (arg) => {
    await exec(arg[0], (err, stdout) => {
      if (err) {
        console.log(err);
      }
      console.log(stdout);
    });
    return;
  },
  PRINT: async (arg) => {
    await console.log(arg[0]);
    return;
  },
  RED: async (arg) => {
    console.log(chalk.redBright(arg[0]));
  },
  // READ: (arg) => {},
  // ASK: (arg) => {},
};
