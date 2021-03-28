import { tags } from "src/store/tags";
import { tag } from "./types";

export interface token {
  tag: tag;
  arguments: Array<string>;
  lineNumber: number;
}

export type tags = {
  [RUN in tag]?: (arg: Array<string>) => any;
};
