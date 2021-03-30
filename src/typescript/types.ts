import { token } from "./interfaces";

export type fileName = string | "setup";
export type _2dArray = Array<Array<string>>;
export type tokens = Array<token>;
export type tag =
  | "RUN"
  | "DO"
  | "PRINT"
  | "READ"
  | "ASK"
  | "RED"
  | "BLUE"
  | "GREEN"
  | "CONCURRENT"
  | "COWSAY"
  | "EXIT"
  | "RUN_ASYNC"
  | "DO_ASYNC"
  | "CONCURRENT"
  | "sorry";
