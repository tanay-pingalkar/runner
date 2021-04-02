import { DO_FUNCTION } from "../../src/store/run-functions/do";

describe("DO function testing", () => {
  test("DO touch lol.js", async () => {
    const truthy = await DO_FUNCTION(["touch lol.js"]);
    expect(truthy).toBeTruthy();
  });
  test("DO rm lol.js", async () => {
    const truthy = await DO_FUNCTION(["rm lol.js"]);
    expect(truthy).toBeTruthy();
  });
  test("DO's error handler check", async () => {
    const truthy = await DO_FUNCTION(["fewjfewj"]);
    expect(truthy).toBeFalsy();
  });
});
