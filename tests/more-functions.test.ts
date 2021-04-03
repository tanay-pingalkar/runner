import { CLEAR_FUNCTION } from "../src/store/more-functions/clear";

describe("more-function test", () => {
  test("clear function", () => {
    expect(CLEAR_FUNCTION()).toBeTruthy();
  });
});
