import chalk from "chalk";
import { Runner } from "./processes/runner";
import { runner_app } from "./processes/interactive";
import { fileName, _2dArray } from "./typescript/types";
import { readFile } from "./utils/readFile";
import { fetchFile } from "./utils/fetchFile";

export const cli = async (args: Array<string>) => {
  let fileName: fileName = "setup";
  let file: string = "";
  if (args[2]) {
    fileName = args[2];
  }
  if (fileName.startsWith("gist:")) {
    fileName = fileName.split(":")[1];
    file = await fetchFile(fileName);
  } else {
    file = readFile(fileName);
  }
  new Runner(file);
};

export const runner = () => {
  console.log(
    chalk.cyan(
      "welcome to runner \ntype EXIT to exit \n Type CHEATSHEET to know more"
    )
  );
  runner_app();
};
