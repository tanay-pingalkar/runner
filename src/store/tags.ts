import { tags as tag } from "../typescript/interfaces";
import { EXIT } from "./more-functions/exit";
import { CHEATSHEET } from "./print-functions/cheatsheet";
import { BLUE, RED, GREEN } from "./print-functions/colorText";
import { COWSAY } from "./print-functions/cowsay";
import { PRINT } from "./print-functions/print";
import { LOGO } from "./print-functions/logo";
import { CONCURRENT } from "./run-functions/congurrent";
import { DO } from "./run-functions/do";
// import { DO_ASYNC } from "./run-functions/do_async";
import { RUN } from "./run-functions/run";
import { WELCOME } from "./print-functions/welcome";
// import { RUN_ASYNC } from "./run-functions/run_async";

export const tags: tag = {
  // run functions
  RUN: RUN,
  DO: DO,
  CONCURRENT: CONCURRENT,
  //RUN_ASYNC: ,
  //DO_ASYNC: DO_ASYNC,

  // print functions
  PRINT: PRINT,
  RED: RED,
  BLUE: BLUE,
  GREEN: GREEN,
  COWSAY: COWSAY,
  CHEATSHEET: CHEATSHEET,
  LOGO:LOGO,
  WELCOME:WELCOME
  // more functions
  EXIT: EXIT,
};
