import chalk from "chalk";

export const warn = (warning: string): void => {
  console.log(chalk.bold(chalk.blueBright("ג ")), chalk.blue(warning));
};
