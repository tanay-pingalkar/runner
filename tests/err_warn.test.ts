import { err } from "../src/utils/err";

describe("err test", () => {
  test("err test", () => {
    expect(err("this is error")).toBeFalsy();
  });
});
