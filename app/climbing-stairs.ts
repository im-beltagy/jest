export function climbingStairs(n: number): number {
  if (n <= 0 || n % 1 !== 0)
    throw new Error("Number must be a positive integer.");

  let nOfWays = [1, 2];

  for (let i = 2; i < n; i++) {
    nOfWays[i] = nOfWays[i - 1] + nOfWays[i - 2];
  }

  return nOfWays[n - 1];
}
