const functions = require("./functions");

test("test function: add", () => {
  expect(functions.add(2, 3)).toBe(5);
});

test("test function: fetchUser", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.username).toEqual("Antonette");
  });
});
