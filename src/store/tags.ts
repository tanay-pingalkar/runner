import { tags as tag } from "../typescript/interfaces";
import { BLUE, RED, GREEN } from "./print-functions/colorText";
import { COWSAY } from "./print-functions/cowsay";
import { PRINT } from "./print-functions/print";
import { DO } from "./run-functions/do";
import { RUN } from "./run-functions/run";

export const tags: tag = {
  // run functions
  RUN: RUN,
  DO: DO,

  // print functions
  PRINT: PRINT,
  RED: RED,
  BLUE: BLUE,
  GREEN: GREEN,
  COWSAY: COWSAY,
};
