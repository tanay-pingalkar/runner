import { tags } from "../store/tags";
import { tag, tokens, _2dArray } from "src/typescript/types";
import { err } from "../utils/err";
import { Split } from "./split";

export class Lexer extends Split {
  tokens: tokens = [];
  constructor(str: string) {
    super(str);
    this.tokenizer();
  }
  tokenizer(): tokens {
    this.arr.forEach((ele: Array<string>, i) => {
      this.tokens.push({
        tag: this.isExist(ele[0].trim() as tag),
        arguments: ele.slice(1),
        lineNumber: i + 1,
      });
    });
    return this.tokens;
  }
  isExist(str: tag): tag {
    if (tags[str]) {
      return str;
    } else {
      err(`${str} is not a valid tag`);
      return "sorry";
    }
  }
}
