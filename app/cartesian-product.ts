export function cartesianProduct<A, B>(arr1: A[], arr2: B[]): [A, B][] | [] {
  if (!arr1 || !arr2) throw new Error("Both inputs must be arrays.");

  if (!arr1.length || !arr1.length) return [];

  return arr1.reduce(
    (acc1, v1) => [
      ...acc1,
      ...arr2.reduce((acc2, v2) => [...acc2, [v1, v2]], []),
    ],
    []
  );
}
