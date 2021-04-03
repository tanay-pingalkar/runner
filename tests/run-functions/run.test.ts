import { RUN_FUNCTION } from "../../src/store/run-functions/run";

describe("testing RUN function", () => {
  test("RUN ls -la", async () => {
    const truthy = await RUN_FUNCTION({ cmd: ["ls -la"], pwd: [] });
    expect(truthy).toBeTruthy();
  });
  test("RUN's error handler", async () => {
    const falsy = await RUN_FUNCTION({ cmd: ["hygsygs"], pwd: [] });
    expect(falsy).toBeFalsy();
  });
});
