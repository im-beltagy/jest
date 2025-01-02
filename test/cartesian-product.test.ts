import { cartesianProduct } from "../app/cartesian-product";

describe.skip("Cartesian Product", () => {
  test("returns the correct Cartesian product for two non-empty arrays", () => {
    const arr1 = [1, 2];
    const arr2 = ["a", "b"];
    const result = cartesianProduct(arr1, arr2);
    expect(result).toEqual([
      [1, "a"],
      [1, "b"],
      [2, "a"],
      [2, "b"],
    ]);
  });

  test("returns an empty array if the first array is empty", () => {
    const arr1 = [];
    const arr2 = ["a", "b"];
    const result = cartesianProduct(arr1, arr2);
    expect(result).toEqual([]);
  });

  test("returns an empty array if the second array is empty", () => {
    const arr1 = [1, 2];
    const arr2 = [];
    const result = cartesianProduct(arr1, arr2);
    expect(result).toEqual([]);
  });

  test("returns an empty array if both arrays are empty", () => {
    const arr1 = [];
    const arr2 = [];
    const result = cartesianProduct(arr1, arr2);
    expect(result).toEqual([]);
  });

  test("works with arrays containing different types", () => {
    const arr1 = [1, true];
    const arr2 = ["a", null];
    const result = cartesianProduct(arr1, arr2);
    expect(result).toEqual([
      [1, "a"],
      [1, null],
      [true, "a"],
      [true, null],
    ]);
  });

  test("throws an error if the first argument is not an array", () => {
    expect(() => cartesianProduct(null, ["a", "b"])).toThrow(
      "Both inputs must be arrays."
    );
  });

  test("throws an error if the second argument is not an array", () => {
    expect(() => cartesianProduct([1, 2], null)).toThrow(
      "Both inputs must be arrays."
    );
  });

  test("throws an error if neither argument is an array", () => {
    expect(() => cartesianProduct(null, null)).toThrow(
      "Both inputs must be arrays."
    );
  });
});
