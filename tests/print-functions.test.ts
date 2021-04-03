import { PRINT_FUNCTION } from "../src/store/print-functions/print";
import {
  RED_FUNCTION,
  GREEN_FUNCTION,
  BLUE_FUNCTION,
} from "../src/store/print-functions/colorText";
import { COWSAY_FUNCTION } from "../src/store/print-functions/cowsay";
import { CHEATSHEET_FUNCTION } from "../src/store/print-functions/cheatsheet";
import { LOGO } from "../src/store/print-functions/logo";
import { WELCOME } from "../src/store/print-functions/welcome";

describe("print function's test", () => {
  test('PRINT "this is print"', () => {
    expect(
      PRINT_FUNCTION({
        txt: ["this is print"],
      })
    ).toBeTruthy();
  });

  // color text test
  test('BLUE "this is red"', () => {
    expect(
      BLUE_FUNCTION({
        txt: ["this is blue"],
      })
    ).toBeTruthy();
  });
  test('GREEN "this is red"', () => {
    expect(
      GREEN_FUNCTION({
        txt: ["this is green"],
      })
    ).toBeTruthy();
  });
  test('RED "this is red"', () => {
    expect(
      RED_FUNCTION({
        txt: ["this is red"],
      })
    ).toBeTruthy();
  });

  // cowsay test
  test('COWSAY "this is cowsay"', () => {
    expect(
      COWSAY_FUNCTION({
        txt: ["this is cowsay"],
      })
    ).toBeTruthy();
  });

  //cheatsheet / welcome / logo test
  test("CHEATSHEET", () => {
    expect(CHEATSHEET_FUNCTION()).toBeTruthy();
  });
  test("WELCOME", () => {
    expect(WELCOME.function([])).toBeTruthy();
  });
  test("LOGO", () => {
    expect(LOGO.function([])).toBeTruthy();
  });
});
