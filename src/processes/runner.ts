import chalk from "chalk";
import { tags } from "../store/tags";
import { Lexer } from "./lexer";

export class Runner extends Lexer {
  constructor(str: string) {
    super(str);
    this.start();
  }
  start() {
    this.tokens.forEach((token) => {
      console.log(
        chalk.blue("\n ["),
        chalk.white(token.lineNumber),
        chalk.blue("]")
      );
      tags[token.tag].function(token.arguments);
    });
  }
}
