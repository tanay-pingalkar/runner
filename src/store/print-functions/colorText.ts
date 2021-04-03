import chalk from "chalk";
import { COLOR_arguments, tagContent } from "../../typescript/interfaces";

// red
export const RED_FUNCTION = (arg: COLOR_arguments): true => {
  console.log(chalk.redBright(arg.txt[0]));
  return true;
};
export const RED: tagContent = {
  function: RED_FUNCTION,
  arguments: {
    all: ["txt"],
    compulsary: ["txt"],
  },
};

//blue
export const BLUE_FUNCTION = (arg: COLOR_arguments): true => {
  console.log(chalk.blue(arg.txt[0]));
  return true;
};
export const BLUE: tagContent = {
  function: BLUE_FUNCTION,
  arguments: {
    all: ["txt"],
    compulsary: ["txt"],
  },
};

//green
export const GREEN_FUNCTION = (arg: COLOR_arguments): true => {
  console.log(chalk.green(arg.txt[0]));
  return true;
};
export const GREEN: tagContent = {
  function: GREEN_FUNCTION,
  arguments: {
    all: ["txt"],
    compulsary: ["txt"],
  },
};
