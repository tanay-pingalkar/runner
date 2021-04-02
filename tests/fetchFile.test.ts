import { fetchFile } from "../src/utils/fetchFile";

describe("fetch file testing", () => {
  test("is fetch gist file working", async () => {
    const str = await fetchFile("6c1fd60ff695ed980f4606bf15bfb8b5");
    expect(str).toBe('PRINT "lo this is op test"');
  });
});
