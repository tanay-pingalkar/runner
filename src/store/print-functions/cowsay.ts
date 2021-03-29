// @ts-ignore
import cowsay from "cowsay";

export const COWSAY = (arg: Array<string>) => {
  console.log(
    cowsay.say({
      text: arg[0],
    })
  );
};
