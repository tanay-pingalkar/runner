import { Split } from "../src/processes/split";

describe("split testing", () => {
  test("is split working", () => {
    const splitted = new Split('PRINT "touch lol.js"')._2dArr();
    expect(splitted).toEqual([["PRINT", "touch lol.js"]]);
  });
  test("is split word working", () => {
    const splitted = new Split("");
    expect(splitted.splitWords(['RUN "echo this is op"'])).toEqual([
      ["RUN", "echo this is op"],
    ]);
  });
});
