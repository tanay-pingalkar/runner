import chalk from "chalk";
import { tagContent } from "../../typescript/interfaces";

// red
export const RED_FUNCTION = (arg: Array<string>) => {
  console.log(chalk.redBright(arg[0]));
};
export const RED: tagContent = {
  function: RED_FUNCTION,
  arguments: 1,
};

//blue
export const BLUE_FUNCTION = (arg: Array<string>) => {
  console.log(chalk.blue(arg[0]));
};
export const BLUE: tagContent = {
  function: BLUE_FUNCTION,
  arguments: 1,
};

//green
export const GREEN_FUNCTION = (arg: Array<string>) => {
  console.log(chalk.green(arg[0]));
};
export const GREEN: tagContent = {
  function: GREEN_FUNCTION,
  arguments: 1,
};
