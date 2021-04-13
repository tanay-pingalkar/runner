import { CONCURRENT_arguments, tagContent } from "../../typescript/interfaces";
import concurrently from "concurrently";
import { err } from "../../utils/err";

export const CONCURRENT_FUNCTION = async (
  args: CONCURRENT_arguments
): Promise<boolean> => {
  try {
    await concurrently(args.cmd);
  } catch (error) {
    return err(error);
  }
  return true;
};
export const CONCURRENT: tagContent = {
  function: CONCURRENT_FUNCTION,
  arguments: {
    all: ["cmd", "cmd", "pwd", "pwd"],
    compulsary: ["cmd", "cmd"],
  },
};
