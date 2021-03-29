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
        chalk.blue("["),
        chalk.white(token.lineNumber),
        chalk.blue("]"),
        chalk.yellow(
          "------------------------------------------------------------------------------------------"
        )
      );
      tags[token.tag](token.arguments);
    });
  }
}
