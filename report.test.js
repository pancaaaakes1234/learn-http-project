const { sortPages } = require("./report");
const { test, expect } = require("@jest/globals");

test("sortPages", () => {
  const input = {
    "wagslane.dev": 63,
    "wagslane.dev/tags": 62,
    "wagslane.dev/about": 62,
  };
  const actual = sortPages(input);
  const expected = [
    ["wagslane.dev", 63],
    ["wagslane.dev/tags", 62],
    ["wagslane.dev/about", 62],
  ];
  expect(actual).toEqual(expected);
});
