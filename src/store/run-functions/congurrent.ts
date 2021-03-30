import { tagContent } from "../../typescript/interfaces";
import concurrently from "concurrently";

export const CONCURRENT_FUNCTION = async (args: Array<string>) => {
  await concurrently(args);
  return;
};
export const CONCURRENT: tagContent = {
  function: CONCURRENT_FUNCTION,
  arguments: 2,
};
