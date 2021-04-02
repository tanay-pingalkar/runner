import { tags } from "../store/tags";
import { tag, tokens, _2dArray } from "src/typescript/types";
import { err } from "../utils/err";
import { Split } from "./split";
import { isExist } from "src/typescript/interfaces";

export class Lexer extends Split {
  tokens: tokens = [];
  constructor(str: string) {
    super(str);
    this.tokenizer();
  }
  tokenizer(): tokens {
    let i = 0;
    for (let ele of this._2dArr()) {
      const givenTag = ele[0] as tag;
      const givenArgument: Array<string> = ele.slice(1);
      const isExist = this.isExist(givenTag, givenArgument, i + 1);
      if (isExist) {
        this.tokens.push({
          tag: isExist.tag,
          arguments: isExist.argument,
          lineNumber: i + 1,
        });
      } else {
        this.tokens = [];
        break;
      }
      i++;
    }
    return this.tokens;
  }
  isExist(str: tag, args: Array<string>, lineNumber: number): isExist | false {
    const tag = tags[str];
    if (tag) {
      if (tag.arguments === args.length) {
        return {
          tag: str,
          argument: args,
        };
      } else {
        return err(
          `only ${tag.arguments} arguments are excepted, you have ${args.length}`,
          lineNumber
        );
      }
    } else {
      return err(`${str} is not a valid tag`, lineNumber);
    }
  }
}
