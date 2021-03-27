import fs from "fs";
import { err } from "./err";

export const readFile = (fileName: string): string | null => {
  try {
    return fs.readFileSync(`${process.cwd()}/${fileName}.rn`).toString();
  } catch {
    err("please provide valid run file");
    return null;
  }
};
