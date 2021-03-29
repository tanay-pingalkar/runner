import { execSync } from "child_process";

export const DO = (arg: Array<string>) => {
  execSync(arg[0]);
  return;
};
