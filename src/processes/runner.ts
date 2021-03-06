import chalk from "chalk";
import { token } from "../typescript/interfaces";
import { tags } from "../store/tags";
import { Lexer } from "./lexer";

export class Runner extends Lexer {
  i = 0;
  constructor(str: string) {
    super(str);
    this.start();
  }
  async start(): Promise<void> {
    const token: token = this.tokens[this.i];
    if (!token) {
      return;
    }
    console.log(
      chalk.blue("\n ["),
      chalk.white(token.lineNumber),
      chalk.blue("]")
    );
    const res = await tags[token.tag].function(token.arguments);
    if (!res || !this.tokens[this.i + 1]) return;
    else {
      this.i = this.i + 1;
      this.start();
    }
  }
}
