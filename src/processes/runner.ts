import { tags } from "../store/tags";
import { Lexer } from "./lexer";

export class Runner extends Lexer {
  constructor(str: string) {
    super(str);
    this.start();
  }
  start() {
    this.tokens.forEach((token) => {
      tags[token.tag](token.arguments);
    });
  }
}
