import chalk from "chalk";
import { readFileSync } from "fs";

export const ansii_logo = (): boolean => {
  const logo = readFileSync(`${__dirname}/../../src/utils/logo.txt`).toString();
  console.log(chalk.red(logo));
  return true;
};
