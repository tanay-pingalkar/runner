import chalk from "chalk";

export const err = (err: string, lineNumber?: number): false => {
  console.log(chalk.bold(chalk.redBright("Ω")), chalk.red(err));
  if (lineNumber) {
    console.log(
      chalk.yellowBright("this error has occure on line "),
      chalk.blue("["),
      chalk.white(lineNumber),
      chalk.blue("]")
    );
  }
  return false;
};
