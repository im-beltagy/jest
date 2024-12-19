import { sayHello } from "../app/hello";

describe.skip("hello", () => {
  it("should say hello", () => {
    expect(sayHello()).toEqual(["Hello", "World"]);
  });
});
