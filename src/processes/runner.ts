import chalk from "chalk";
import { token } from "../typescript/interfaces";
import { tags } from "../store/tags";
import { Lexer } from "./lexer";
import { exit } from "process";

export class Runner extends Lexer {
  i: number = 0;
  constructor(str: string) {
    super(str);
    this.start();
  }
  async start() {
    console.log(
      chalk.blue("\n ["),
      chalk.white(this.tokens[this.i].lineNumber),
      chalk.blue("]")
    );
    const res = await tags[this.tokens[this.i].tag].function(
      this.tokens[this.i].arguments
    );
    if (!res || !this.tokens[this.i + 1]) exit();
    else {
      this.i = this.i + 1;
      this.start();
    }
  }
}
