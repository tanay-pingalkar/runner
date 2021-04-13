import { err } from "../src/utils/err";
import { warn } from "../src/utils/warn";

describe("err test", () => {
  test("err test", () => {
    expect(err("this is error")).toBeFalsy();
  });
  test("warn test", () => {
    expect(warn("this is a warning")).toBeUndefined();
  });
});
