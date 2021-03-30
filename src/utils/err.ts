import chalk from "chalk";
import { exit } from "process";

export const err = (err: string, lineNumber?: number) => {
  console.log(chalk.bold(chalk.redBright("Ω")), chalk.red(err));
  if (lineNumber) {
    console.log(
      chalk.yellowBright("this error has occure on line "),
      chalk.blue("["),
      chalk.white(lineNumber),
      chalk.blue("]")
    );
  }
  exit();
};
