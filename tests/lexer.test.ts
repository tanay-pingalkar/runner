import { Lexer } from "../src/processes/lexer";

describe("lexer testing", () => {
  test("is lexer working", () => {
    const _lexer = new Lexer('PRINT "touch lol.js"');
    expect(_lexer.tokens).toEqual([
      {
        tag: "PRINT",
        arguments: ["touch lol.js"],
        lineNumber: 1,
      },
    ]);
  });
  test("testing lexer's isExist", () => {
    const _lexer = new Lexer('PRINT "touch lol.js"');
    expect(_lexer.isExist("PRINT", ["lol"], 1)).toEqual({
      tag: "PRINT",
      argument: ["lol"],
    });
    expect(_lexer.isExist("PRI", ["lol"], 1)).toBeFalsy();
    expect(_lexer.isExist("PRINT", ["lol", "ferfefe"], 2)).toBeFalsy();
  });
});
