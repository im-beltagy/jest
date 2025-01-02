import { towerOfHanoi } from "../app/tower-of-hanoi";

describe("Tower Of Hanoi", () => {
  test("solves Tower of Hanoi for 1 disk", () => {
    const moves = towerOfHanoi(1, "A", "C", "B");
    expect(moves).toEqual(["Move disk 1 from A to C"]);
  });

  test("solves Tower of Hanoi for 2 disks", () => {
    const moves = towerOfHanoi(2, "A", "C", "B");
    expect(moves).toEqual([
      "Move disk 1 from A to B",
      "Move disk 2 from A to C",
      "Move disk 1 from B to C",
    ]);
  });

  test("solves Tower of Hanoi for 3 disks", () => {
    const moves = towerOfHanoi(3, "A", "C", "B");
    expect(moves).toEqual([
      "Move disk 1 from A to C",
      "Move disk 2 from A to B",
      "Move disk 1 from C to B",
      "Move disk 3 from A to C",
      "Move disk 1 from B to A",
      "Move disk 2 from B to C",
      "Move disk 1 from A to C",
    ]);
  });

  test("handles larger inputs (e.g., 4 disks)", () => {
    const moves = towerOfHanoi(4, "A", "C", "B");
    expect(moves.length).toBe(15); // 2^4 - 1 = 15 moves
  });

  test("throws an error for invalid disk count", () => {
    expect(() => towerOfHanoi(0, "A", "C", "B")).toThrow(
      "Number of disks must be a positive integer"
    );
    expect(() => towerOfHanoi(-1, "A", "C", "B")).toThrow(
      "Number of disks must be a positive integer"
    );
  });

  test("throws an error for non-integer disk count", () => {
    expect(() => towerOfHanoi(1.5, "A", "C", "B")).toThrow(
      "Number of disks must be a positive integer"
    );
  });

  test("verifies the number of moves matches the formula (2^n - 1)", () => {
    const n = 5;
    const moves = towerOfHanoi(n, "A", "C", "B");
    expect(moves.length).toBe(Math.pow(2, n) - 1);
  });
});
