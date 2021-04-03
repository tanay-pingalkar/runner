/* eslint-disable @typescript-eslint/no-explicit-any */
import { tags } from "../store/tags";
import { tag, tokens } from "src/typescript/types";
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
    for (const ele of this._2dArr()) {
      const givenTag = ele[0] as tag;
      const givenArgument: Array<string> = ele.slice(1);
      const parsed = this.argumentParser(givenTag, givenArgument, i + 1);
      if (parsed) {
        this.tokens.push({
          tag: parsed.tag,
          arguments: parsed.argument,
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
  argumentParser(
    str: tag,
    args: Array<string>,
    lineNumber: number
  ): isExist | false {
    const tag = tags[str];

    // checks for if tag exist and if given arguments are equal to compulsary arguments
    if (!tag) return err(`${str} is not a valid tag`, lineNumber);
    const tagArg = tag.arguments;
    if (args.length < tagArg.compulsary.length) {
      return err(
        `expected ${tagArg.compulsary.length} arguments but found ${args.length}`,
        lineNumber
      );
    }

    const obj: any = tagArg.all.reduce((o, key) => {
      return Object.assign(o, { [key]: [] });
    }, {});
    let i = 0;
    for (const ele of args) {
      if (ele.match(/:/g)) {
        const splitted = ele.split(":");
        if (obj[splitted[0]]) obj[splitted[0]].push(splitted[1]);
        else return err(`${splitted[0]} is not a valid argument name`);
      } else {
        obj[tagArg.all[i]].push(ele);
      }
      i++;
    }

    return {
      tag: str,
      argument: obj,
    };
  }
}
