import { climbingStairs } from "../app/climbing-stairs";

describe.skip("climbingStairs", () => {
  test("returns 1 for n = 0 (base case)", () => {
    expect(() => climbingStairs(0)).toThrow(
      "Number must be a positive integer."
    );
  });

  test("returns 1 for n = 1 (base case)", () => {
    expect(climbingStairs(1)).toBe(1);
  });

  test("returns 2 for n = 2", () => {
    expect(climbingStairs(2)).toBe(2); // [1+1, 2]
  });

  test("returns 3 for n = 3", () => {
    expect(climbingStairs(3)).toBe(3); // [1+1+1, 1+2, 2+1]
  });

  test("returns 5 for n = 4", () => {
    expect(climbingStairs(4)).toBe(5); // [1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2]
  });

  test("returns 8 for n = 5", () => {
    expect(climbingStairs(5)).toBe(8); // Fibonacci sequence: 1, 1, 2, 3, 5, 8
  });

  test("returns the correct value for large n (e.g., n = 30)", () => {
    expect(climbingStairs(30)).toBe(1346269); // Precomputed Fibonacci value
  });

  test("throws an error for negative n", () => {
    expect(() => climbingStairs(-1)).toThrow(
      "Number must be a positive integer."
    );
  });

  test("handles edge case for large n", () => {
    expect(climbingStairs(50)).toBe(20365011074); // Precomputed Fibonacci value
  });

  test("throws an error if n is not an integer", () => {
    expect(() => climbingStairs(1.5)).toThrow(
      "Number must be a positive integer."
    );
  });
});
