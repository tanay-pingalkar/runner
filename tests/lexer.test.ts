import { Lexer } from "../src/processes/lexer";
import { tag } from "../src/typescript/types";

describe("lexer testing", () => {
  const lex = new Lexer('RUN "touch lol.js" "pwd:/examples"');
  test("is tester working", () => {
    expect(lex.tokens).toEqual([
      {
        tag: "RUN",
        arguments: {
          cmd: ["touch lol.js"],
          pwd: ["/examples"],
        },
        lineNumber: 1,
      },
    ]);
  });

  test("argument parser test", () => {
    expect(lex.argumentParser("CONCURRENT", ["echo lol", "ls -la"], 1)).toEqual(
      {
        tag: "CONCURRENT",
        argument: {
          cmd: ["echo lol", "ls -la"],
          pwd: [],
        },
      }
    );

    expect(
      lex.argumentParser(
        "CONCURRENT",
        ["echo lol", "ls -la", "/examples", "/"],
        1
      )
    ).toEqual({
      tag: "CONCURRENT",
      argument: {
        cmd: ["echo lol", "ls -la"],
        pwd: ["/examples", "/"],
      },
    });

    expect(
      lex.argumentParser(
        "CONCURRENT",
        ["cmd:echo lol", "pwd:/examples", "cmd:ls -la", "pwd:/"],
        1
      )
    ).toEqual({
      tag: "CONCURRENT",
      argument: {
        cmd: ["echo lol", "ls -la"],
        pwd: ["/examples", "/"],
      },
    });
  });

  test("argument parser error handlers", () => {
    // error handler [1]
    expect(lex.argumentParser("CONCURRENT", ["echo lol"], 1)).toBeFalsy();

    //error handler [2]
    expect(lex.argumentParser("CONCURREN" as tag, ["echo lol"], 1)).toBeFalsy();

    // error handler [3]
    expect(lex.argumentParser("PRINT", [], 1)).toBeFalsy();
  });
});
