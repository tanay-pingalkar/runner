import { tags } from "../store/tags";
import { tag, tokens, _2dArray } from "src/typescript/types";
import { err } from "../utils/err";
import { Split } from "./split";
import { isExist } from "src/typescript/interfaces";
import { exit } from "process";

export class Lexer extends Split {
  tokens: tokens = [];
  constructor(str: string) {
    super(str);
    this.tokenizer();
  }
  tokenizer(): tokens {
    this.arr.forEach((ele: Array<string>, i) => {
      const givenTag = ele[0].trim() as tag;
      const givenArgument: Array<string> = ele.slice(1);
      const { tag, argument } = this.isExist(givenTag, givenArgument, i + 1);
      this.tokens.push({
        tag: tag,
        arguments: argument,
        lineNumber: i + 1,
      });
    });
    return this.tokens;
  }
  isExist(str: tag, args: Array<string>, lineNumber: number): isExist {
    const tag = tags[str];
    if (tag) {
      if (tag.arguments === args.length) {
        return {
          tag: str,
          argument: args,
        };
      } else {
        err(
          `only ${tag.arguments} arguments are excepted, you have ${args.length}`,
          lineNumber
        );
        exit();
      }
    } else {
      err(`${str} is not a valid tag`, lineNumber);
      exit();
    }
  }
}
