// @ts-ignore
import cowsay from "cowsay";
import { COWSAY_arguments, tagContent } from "../../typescript/interfaces";

export const COWSAY_FUNCTION = async (arg: COWSAY_arguments) => {
  console.log(
    cowsay.say({
      text: arg.txt[0],
    })
  );
  return true;
};

export const COWSAY: tagContent = {
  function: COWSAY_FUNCTION,
  arguments: {
    all: ["txt"],
    compulsary: ["txt"],
  },
};
