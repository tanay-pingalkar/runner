import chalk from "chalk";
import { token } from "../typescript/interfaces";
import { tags } from "../store/tags";
import { Lexer } from "./lexer";

export class Runner extends Lexer {
  constructor(str: string) {
    super(str);
    this.start();
  }
  start() {
    let token: token;
    for (token of this.tokens) {
      console.log(
        chalk.blue("\n ["),
        chalk.white(token.lineNumber),
        chalk.blue("]")
      );
      const res = tags[token.tag].function(token.arguments);
      if (!res) break;
    }
  }
}
