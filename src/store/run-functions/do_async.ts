import { exec } from "child_process";
import { warn } from "../../utils/warn";
import { err } from "../../utils/err";
import { tagContent } from "../../typescript/interfaces";

export const DO_ASYNC_FUNCTION = async (arg: Array<string>) => {
  exec(arg[0], (error, stdout, stderr) => {
    if (error) err(error.message.toString());
    if (stdout) console.log(stdout.toString());
    if (stderr) warn(stderr.toString());
  });
  return;
};
export const DO_ASYNC: tagContent = {
  function: DO_ASYNC_FUNCTION,
  arguments: 1,
};
