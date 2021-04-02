import { RUN_FUNCTION } from "../../src/store/run-functions/run";

describe("testing RUN function", () => {
  test("RUN ls -la", async () => {
    const truthy = await RUN_FUNCTION(["ls", "-la"]);
    expect(truthy).toBeTruthy();
  });
  test("RUN's error handler", async () => {
    const falsy = await RUN_FUNCTION(["cnewfjcnajd", "frfeff"]);
    expect(falsy).toBeFalsy();
  });
});
