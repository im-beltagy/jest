export function bubbleSort(
  arr: number[],
  order: "asc" | "desc" = "asc"
): number[] {
  if (arr.length <= 1) return arr;

  function swap(...nums: [number, number]): {
    result: [number, number];
    isSwapped: boolean;
  } {
    if (nums[0] === nums[1]) return { result: nums, isSwapped: false };

    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return order === "asc"
      ? { result: [min, max], isSwapped: max === nums[0] }
      : { result: [max, min], isSwapped: min === nums[0] };
  }

  if (arr.length === 2) return swap(arr[0], arr[1]).result;

  let hasSwap = false;

  for (let i = 1; i < arr.length; i++) {
    const { result, isSwapped } = swap(arr[i - 1], arr[i]);
    if (isSwapped) {
      arr[i - 1] = result[0];
      arr[i] = result[1];
      hasSwap = true;
    }
  }

  return hasSwap ? bubbleSort(arr, order) : arr;
}

export function insertionSort(
  arr: number[],
  order: "asc" | "desc" = "asc",
  rightSortedIndex = 0
): number[] {
  function shouldShift(...[sorted, unsorted]: [number, number]) {
    if (order === "asc") return sorted > unsorted;
    return sorted < unsorted;
  }

  const leftUnsortedValue = arr[rightSortedIndex + 1];

  // loop all sorted starting from right
  for (let i = rightSortedIndex; i >= 0; i--) {
    if (shouldShift(arr[i], leftUnsortedValue)) {
      arr[i + 1] = arr[i];

      if (i === 0) {
        arr[i] = leftUnsortedValue;
        break;
      }
    } else {
      arr[i + 1] = leftUnsortedValue;
      break;
    }
  }

  return rightSortedIndex + 1 === arr.length - 1
    ? arr
    : insertionSort(arr, order, rightSortedIndex + 1);
}

export function quickSort(
  arr: number[],
  order: "asc" | "desc" = "asc"
): number[] {
  const pivot = arr[arr.length - 1];
  let left: number[] = [];
  let right: number[] = [];

  function moveElement(el: number) {
    if (order === "asc") {
      (el > pivot ? right : left).push(el);
    } else {
      (el < pivot ? right : left).push(el);
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    moveElement(arr[i]);
  }

  if (left.length > 1) left = quickSort(left, order);
  if (right.length > 1) right = quickSort(right, order);

  return [...left, pivot, ...right];
}

export function mergeSort(
  arr: number[],
  order: "asc" | "desc" = "asc"
): number[] {
  if (arr.length <= 1) return arr;

  function merge(...[a1, a2]: [number[], number[]]) {
    const sorted: number[] = [];

    while (a1.length && a2.length) {
      if (order === "asc" ? a1[0] < a2[0] : a1[0] > a2[0]) {
        sorted.push(a1.shift());
      } else {
        sorted.push(a2.shift());
      }
    }

    return [...sorted, ...a1, ...a2];
  }

  const centerIndex = Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, centerIndex), order),
    mergeSort(arr.slice(centerIndex), order)
  );
}
