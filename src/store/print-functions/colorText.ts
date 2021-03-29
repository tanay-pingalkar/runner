import chalk from "chalk";

export const RED = (arg: Array<string>) => {
  console.log(chalk.redBright(arg[0]));
};

export const BLUE = (arg: Array<string>) => {
  console.log(chalk.blue(arg[0]));
};

export const GREEN = (arg: Array<string>) => {
  console.log(chalk.green(arg[0]));
};
