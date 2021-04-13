import { terminal as term } from "terminal-kit";
import { err } from "../utils/err";
import { Runner } from "./runner";

export const runner_app = async (): Promise<void> => {
  term.bold("> ");
  term.inputField((error, input) => {
    if (error) err(error);
    new Runner(input);
    runner_app();
  });
};
