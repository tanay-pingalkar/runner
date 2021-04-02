import { tags } from "src/store/tags";
import { tag } from "./types";

export interface token {
  tag: tag;
  arguments: Array<string>;
  lineNumber: number;
}

export interface tagContent {
  function: (arg: Array<string>) => Promise<boolean> | boolean;
  arguments: number;
}
export type tags = {
  [RUN in tag]?: tagContent;
};
export interface isExist {
  tag: tag;
  argument: Array<string>;
}
