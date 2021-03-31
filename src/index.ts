import chalk from "chalk";
import { Runner } from "./processes/runner";
import { runner_app } from "./processes/runner-app";
import { fileName, _2dArray } from "./typescript/types";
import { readFile } from "./utils/readFile";

export const cli = (args: Array<string>) => {
  let fileName: fileName = "setup";
  if (args[2]) {
    fileName = args[2];
  }
  const file: string = readFile(fileName);
  new Runner(file);
};

export const runner = () => {
  console.log(chalk.cyan("welcome to runner \ntype EXIT to exit"));
  runner_app();
};
