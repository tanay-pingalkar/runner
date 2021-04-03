import chalk from "chalk";
import { ansii_logo } from "./ansii_logo";

export const welcome = (): boolean => {
  ansii_logo();
  console.log(
    chalk.bold(chalk.cyan("Welcome to"), chalk.redBright("Runner")),
    chalk.italic(chalk.cyanBright("interactive mode")),
    chalk.dim(
      `\ntype EXIT to exit \ntype CHEATSHEET to know more\n${chalk.italic(
        "version"
      )} 1.0.0 beta (testing)`
    )
  );
  return true;
};
