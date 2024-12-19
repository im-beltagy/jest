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
