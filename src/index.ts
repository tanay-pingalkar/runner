import { Split } from "./processes/split";
import { fileName, _2dArray } from "./typescript/types";
import { readFile } from "./utils/readFile";

export const cli = (args: Array<string>) => {
  let fileName: fileName = "setup";
  if (args[2]) {
    fileName = args[2];
  }
  const file: string = readFile(fileName);
  const _2dArr: _2dArray = new Split(file)._2dArr();
  console.log(_2dArr);
};
