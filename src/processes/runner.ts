import chalk from "chalk";
import { token } from "../typescript/interfaces";
import { tags } from "../store/tags";
import { Lexer } from "./lexer";

export class Runner extends Lexer {
  i: number = 0;
  constructor(str: string) {
    super(str);
    this.start();
  }
  async start() {
    const token: token = this.tokens[this.i];
    if (!token) {
      return;
    }
    console.log(
      chalk.blue("\n ["),
      chalk.white(token.lineNumber),
      chalk.blue("]"),
      chalk.cyan("running :"),
      chalk.yellow(
        chalk.bold(token.tag + ' "' + token.arguments.join('" "') + '" \n')
      )
    );
    const res = await tags[token.tag].function(token.arguments);
    if (!res || !this.tokens[this.i + 1]) return;
    else {
      this.i = this.i + 1;
      this.start();
    }
  }
}
