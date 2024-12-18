import { sayHello } from "../app/hello";

describe("hello", () => {
  it("should say hello", () => {
    expect(sayHello()).toEqual(["Hello", "World"]);
  });
});
