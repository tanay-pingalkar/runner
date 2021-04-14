import { Split } from "../src/processes/split";

describe("split testing", () => {
  test("is split working", () => {
    const splitted = new Split('PRINT "touch lol.js"')._2dArr();
    expect(splitted).toEqual([["PRINT", "touch lol.js"]]);
  });
  test("splitter empty line and comments test", () => {
    const splitted = new Split(
      'PRINT "oki its fine" \n \n \n DO "ls -la" \n // vrvrevrevrev \n RUN "yarn init -y"'
    )._2dArr();
    console.log(splitted);
    expect(splitted).toEqual([
      ["PRINT", "oki its fine"],
      ["DO", "ls -la"],
      ["RUN", "yarn init -y"],
    ]);
  });
  test("is split word working", () => {
    const splitted = new Split("");
    expect(splitted.splitWords(['RUN "echo this is op"'])).toEqual([
      ["RUN", "echo this is op"],
    ]);
  });
});
