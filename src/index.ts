import { Runner } from "./processes/runner";
import { runner_app } from "./processes/interactive";
import { fileName, _2dArray } from "./typescript/types";
import { readFile } from "./utils/readFile";
import { fetchFile } from "./utils/fetchFile";
import { ansii_logo } from "./utils/ansii_logo";
import { welcome } from "./utils/welcome";

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
  return file;
};

export const runner = () => {
  welcome();
  runner_app();
};
