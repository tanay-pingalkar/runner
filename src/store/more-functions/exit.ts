import chalk from "chalk";
import { tagContent } from "src/typescript/interfaces";

const EXIT_FUNCTION = async (): Promise<never> => {
  console.log(chalk.redBright("Exit"));
  process.exit();
};
export const EXIT: tagContent = {
  function: EXIT_FUNCTION,
  arguments: {
    all: [],
    compulsary: [],
  },
};
