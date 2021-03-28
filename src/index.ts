import { Runner } from "./processes/runner";
import { fileName, _2dArray } from "./typescript/types";
import { readFile } from "./utils/readFile";

export const cli = (args: Array<string>) => {
  let fileName: fileName = "setup";
  if (args[2]) {
    fileName = args[2];
  }
  const file: string = readFile(fileName);
  new Runner(file);
};
