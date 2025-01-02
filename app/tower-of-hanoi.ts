export function towerOfHanoi(
  n: number,
  from: string,
  to: string,
  using: string
): string[] {
  if (n <= 0 || n % 1 !== 0)
    throw new Error("Number of disks must be a positive integer");

  const steps: string[] = [];

  if (n > 1) steps.push(...towerOfHanoi(n - 1, from, using, to));

  steps.push(`Move disk ${n} from ${from} to ${to}`);

  if (n > 1) steps.push(...towerOfHanoi(n - 1, using, to, from));

  return steps;
}
