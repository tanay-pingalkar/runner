import chalk from "chalk";
import { exit } from "process";

export const err = (err: string) => {
  console.log(chalk.bold(chalk.redBright("Ω")), chalk.red(err));
  exit();
};
