import chalk from "chalk";

export const warn = (warning: string) => {
  console.log(chalk.bold(chalk.blueBright("ג ")), chalk.blue(warning));
};
