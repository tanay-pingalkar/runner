import chalk from "chalk";

export const warn = (warning: string) => {
  console.log("+----------------------------------------------------+");
  console.log(chalk.bold(chalk.blueBright("ג ")), chalk.blue(warning));
  console.log("+----------------------------------------------------+");
};
