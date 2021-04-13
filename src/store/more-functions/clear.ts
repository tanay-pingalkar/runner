import { tagContent } from "src/typescript/interfaces";

export const CLEAR_FUNCTION = (): boolean => {
  console.clear();
  return true;
};
export const CLEAR: tagContent = {
  function: CLEAR_FUNCTION,
  arguments: {
    all: [],
    compulsary: [],
  },
};
