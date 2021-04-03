import { DO_FUNCTION } from "../../src/store/run-functions/do";

describe("DO function testing", () => {
  test("DO touch lol.js", async () => {
    const truthy = await DO_FUNCTION({ cmd: ["touch lol.js"], pwd: [] });
    expect(truthy).toBeTruthy();
  });
  test("DO rm lol.js", async () => {
    const truthy = await DO_FUNCTION({ cmd: ["rm lol.js"], pwd: [] });
    expect(truthy).toBeTruthy();
  });
  test("DO's error handler check", async () => {
    const truthy = await DO_FUNCTION({ cmd: ["bhdbjbd"], pwd: [] });
    expect(truthy).toBeFalsy();
  });
});
