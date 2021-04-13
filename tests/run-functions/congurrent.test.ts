import { CONCURRENT_FUNCTION } from "../../src/store/run-functions/congurrent";

describe("congurrent function test", () => {
  test("congurrent should return true", () => {
    expect(
      CONCURRENT_FUNCTION({
        cmd: ["ls", "ls -la"],
        pwd: [],
      })
    ).toBeTruthy();
  });
});
