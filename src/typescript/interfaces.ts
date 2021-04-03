import { tags } from "src/store/tags";
import { tag } from "./types";

export interface token {
  tag: tag;
  arguments: object;
  lineNumber: number;
}

export interface tagContent {
  function: (arg: any) => boolean | Promise<boolean>;
  arguments: {
    all: Array<string>;
    compulsary: Array<string>;
  };
}

export interface RUN_arguments {
  cmd: Array<string>;
  pwd: Array<string>;
}
export interface DO_arguments {
  cmd: Array<string>;
  pwd: Array<string>;
}
export interface CONCURRENT_arguments {
  cmd: Array<string>;
  pwd: Array<string>;
}

export interface PRINT_arguments {
  txt: Array<string>;
}
export interface COLOR_arguments {
  txt: Array<string>;
}
export interface COWSAY_arguments {
  txt: Array<string>;
}
export type tags = {
  [key in tag]?: tagContent;
};
export interface isExist {
  tag: tag;
  argument: object;
}
