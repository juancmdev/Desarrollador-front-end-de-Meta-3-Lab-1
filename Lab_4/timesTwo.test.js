/*
Code a test call with the following arguments:
    The description that reads: "returns the number times 2".
    The second argument should expect the call to the timesTwo function, when passed the number 10, to be 20. 
*/

const timesTwo = require("./timesTwo");

// Write the first test
test("returns the number times 2", () => {
  expect(timesTwo(10)).toBe(20);
});
