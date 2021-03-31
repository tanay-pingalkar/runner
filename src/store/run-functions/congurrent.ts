import { tagContent } from "../../typescript/interfaces";
import concurrently from "concurrently";
import { err } from "../../utils/err";

export const CONCURRENT_FUNCTION = async (
  args: Array<string>
): Promise<boolean> => {
  try {
    await concurrently(args);
  } catch (error) {
    return err(error);
  }
  return true;
};
export const CONCURRENT: tagContent = {
  function: CONCURRENT_FUNCTION,
  arguments: 2,
};
