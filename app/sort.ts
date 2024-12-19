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
