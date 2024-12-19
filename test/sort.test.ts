import { bubbleSort, insertionSort, quickSort } from "../app/sort";

describe.skip("Bubble Sort", () => {
  describe("Ascending", () => {
    test("Middle Case", () => {
      expect(bubbleSort([-6, 20, 8, -2, 4])).toEqual([-6, -2, 4, 8, 20]);
    });

    test("Empty Array", () => {
      expect(bubbleSort([])).toEqual([]);
    });

    test("Already Sorted Array", () => {
      expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("Reverse Sorted Array", () => {
      expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test("Array with Duplicate Values", () => {
      expect(bubbleSort([4, 2, 7, 2, 5, 7])).toEqual([2, 2, 4, 5, 7, 7]);
    });

    test("Array with Single Element", () => {
      expect(bubbleSort([42])).toEqual([42]);
    });

    test("Array with Negative Numbers", () => {
      expect(bubbleSort([-3, -1, -7, -2, -5])).toEqual([-7, -5, -3, -2, -1]);
    });

    test("Array with Large Numbers", () => {
      expect(bubbleSort([100000, 500, 70000, 1, 99])).toEqual([
        1, 99, 500, 70000, 100000,
      ]);
    });
  });

  describe("Descending", () => {
    test("Middle Case", () => {
      expect(bubbleSort([-6, 20, 8, -2, 4], "desc")).toEqual([
        20, 8, 4, -2, -6,
      ]);
    });

    test("Empty Array", () => {
      expect(bubbleSort([], "desc")).toEqual([]);
    });

    test("Already Sorted in Descending Order", () => {
      expect(bubbleSort([5, 4, 3, 2, 1], "desc")).toEqual([5, 4, 3, 2, 1]);
    });

    test("Reverse Sorted Array", () => {
      expect(bubbleSort([1, 2, 3, 4, 5], "desc")).toEqual([5, 4, 3, 2, 1]);
    });

    test("Array with Duplicate Values", () => {
      expect(bubbleSort([4, 2, 7, 2, 5, 7], "desc")).toEqual([
        7, 7, 5, 4, 2, 2,
      ]);
    });

    test("Array with Single Element", () => {
      expect(bubbleSort([42], "desc")).toEqual([42]);
    });

    test("Array with Negative Numbers", () => {
      expect(bubbleSort([-3, -1, -7, -2, -5], "desc")).toEqual([
        -1, -2, -3, -5, -7,
      ]);
    });

    test("Array with Large Numbers", () => {
      expect(bubbleSort([100000, 500, 70000, 1, 99], "desc")).toEqual([
        100000, 70000, 500, 99, 1,
      ]);
    });
  });
});

describe.skip("Insertion Sort", () => {
  describe("Ascending", () => {
    test("Middle Case", () => {
      expect(insertionSort([-6, 20, 8, -2, 4])).toEqual([-6, -2, 4, 8, 20]);
    });

    test("Empty Array", () => {
      expect(insertionSort([])).toEqual([]);
    });

    test("Already Sorted Array", () => {
      expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("Reverse Sorted Array", () => {
      expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test("Array with Duplicate Values", () => {
      expect(insertionSort([4, 2, 7, 2, 5, 7])).toEqual([2, 2, 4, 5, 7, 7]);
    });

    test("Array with Single Element", () => {
      expect(insertionSort([42])).toEqual([42]);
    });

    test("Array with Negative Numbers", () => {
      expect(insertionSort([-3, -1, -7, -2, -5])).toEqual([-7, -5, -3, -2, -1]);
    });

    test("Array with Large Numbers", () => {
      expect(insertionSort([100000, 500, 70000, 1, 99])).toEqual([
        1, 99, 500, 70000, 100000,
      ]);
    });
  });

  describe("Descending", () => {
    test("Middle Case", () => {
      expect(insertionSort([-6, 20, 8, -2, 4], "desc")).toEqual([
        20, 8, 4, -2, -6,
      ]);
    });

    test("Empty Array", () => {
      expect(insertionSort([], "desc")).toEqual([]);
    });

    test("Already Sorted in Descending Order", () => {
      expect(insertionSort([5, 4, 3, 2, 1], "desc")).toEqual([5, 4, 3, 2, 1]);
    });

    test("Reverse Sorted Array", () => {
      expect(insertionSort([1, 2, 3, 4, 5], "desc")).toEqual([5, 4, 3, 2, 1]);
    });

    test("Array with Duplicate Values", () => {
      expect(insertionSort([4, 2, 7, 2, 5, 7], "desc")).toEqual([
        7, 7, 5, 4, 2, 2,
      ]);
    });

    test("Array with Single Element", () => {
      expect(insertionSort([42], "desc")).toEqual([42]);
    });

    test("Array with Negative Numbers", () => {
      expect(insertionSort([-3, -1, -7, -2, -5], "desc")).toEqual([
        -1, -2, -3, -5, -7,
      ]);
    });

    test("Array with Large Numbers", () => {
      expect(insertionSort([100000, 500, 70000, 1, 99], "desc")).toEqual([
        100000, 70000, 500, 99, 1,
      ]);
    });
  });
});

describe("Quick Sort", () => {
  describe("Ascending", () => {
    test("Middle Case", () => {
      expect(quickSort([-6, 20, 8, -2, 4])).toEqual([-6, -2, 4, 8, 20]);
    });

    test("Empty Array", () => {
      expect(quickSort([])).toEqual([]);
    });

    test("Already Sorted Array", () => {
      expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("Reverse Sorted Array", () => {
      expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test("Array with Duplicate Values", () => {
      expect(quickSort([4, 2, 7, 2, 5, 7])).toEqual([2, 2, 4, 5, 7, 7]);
    });

    test("Array with Single Element", () => {
      expect(quickSort([42])).toEqual([42]);
    });

    test("Array with Negative Numbers", () => {
      expect(quickSort([-3, -1, -7, -2, -5])).toEqual([-7, -5, -3, -2, -1]);
    });

    test("Array with Large Numbers", () => {
      expect(quickSort([100000, 500, 70000, 1, 99])).toEqual([
        1, 99, 500, 70000, 100000,
      ]);
    });
  });

  describe("Descending", () => {
    test("Middle Case", () => {
      expect(quickSort([-6, 20, 8, -2, 4], "desc")).toEqual([20, 8, 4, -2, -6]);
    });

    test("Empty Array", () => {
      expect(quickSort([], "desc")).toEqual([]);
    });

    test("Already Sorted in Descending Order", () => {
      expect(quickSort([5, 4, 3, 2, 1], "desc")).toEqual([5, 4, 3, 2, 1]);
    });

    test("Reverse Sorted Array", () => {
      expect(quickSort([1, 2, 3, 4, 5], "desc")).toEqual([5, 4, 3, 2, 1]);
    });

    test("Array with Duplicate Values", () => {
      expect(quickSort([4, 2, 7, 2, 5, 7], "desc")).toEqual([7, 7, 5, 4, 2, 2]);
    });

    test("Array with Single Element", () => {
      expect(quickSort([42], "desc")).toEqual([42]);
    });

    test("Array with Negative Numbers", () => {
      expect(quickSort([-3, -1, -7, -2, -5], "desc")).toEqual([
        -1, -2, -3, -5, -7,
      ]);
    });

    test("Array with Large Numbers", () => {
      expect(quickSort([100000, 500, 70000, 1, 99], "desc")).toEqual([
        100000, 70000, 500, 99, 1,
      ]);
    });
  });
});
