import { add, multiply } from "./mathFunctions";

describe("Math test", () => {
  it("Check add function", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("Check multiply function", () => {
    expect(multiply(1, 2)).toBe(2);
  });
});
