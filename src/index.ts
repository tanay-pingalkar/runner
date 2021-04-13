import { Runner } from "./processes/runner";
import { runner_app } from "./processes/interactive";
import { fileName } from "./typescript/types";
import { readFile } from "./utils/readFile";
import { fetchFile } from "./utils/fetchFile";
import { welcome } from "./utils/welcome";
import { cli_arg_parser } from "./utils/args";
import { build_cli } from "./processes/build";

export const cli = async (args: Array<string>): Promise<void> => {
  let fileName: fileName = "setup";
  let file = "";
  if (args[2]) {
    fileName = args[2];
  }
  if (fileName.startsWith("gist:")) {
    fileName = fileName.split(":")[1];
    file = await fetchFile(fileName);
  } else {
    file = readFile(fileName);
  }
  const { build } = cli_arg_parser(args);
  if (build) {
    build_cli(file, fileName);
    return;
  }
  new Runner(file);
};

export const runner = (): void => {
  welcome();
  runner_app();
};
