import { tags } from "src/store/tags";
import { tag } from "./types";

export interface token {
  tag: tag;
  arguments: Array<string>;
  lineNumber: number;
}
export interface tagsMeta {
  token: {
    tagName: tag;
    lineNumber: number;
  };
  function: Function;
}
export type tags = {
  [RUN in tag]: tagsMeta;
};
