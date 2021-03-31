// @ts-ignore
import cowsay from "cowsay";
import { tagContent } from "../../typescript/interfaces";

export const COWSAY_FUNCTION = async (arg: Array<string>) => {
  console.log(
    cowsay.say({
      text: arg[0],
    })
  );
  return true;
};

export const COWSAY: tagContent = {
  function: COWSAY_FUNCTION,
  arguments: 1,
};
