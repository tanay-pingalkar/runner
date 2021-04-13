import { readFile } from "../src/utils/readFile";

describe("read file testing", () => {
  test("is read file working", async () => {
    expect(readFile("examples/setup")).toContain('PRINT "welcome to runner"');
  });
});
