/*
Your goal in this kata is to implement a difference function, which subtracts one list from another
and returns the result. It should remove all values from list a, which are present in list b.
array_diff([1,2],[1]) == [2]
*/

import { test } from "@/test.ts";

function array_diff(a: number[], b: number[]): number[] {
  const result: number[] = [];
  let current = 0;
  for (current of a) {
    if (!b.includes(current)) {
      result.push(current);
    }
  }
  return result;
}

test(array_diff([1, 2], [1]), [2]);
test(array_diff([1, 2, 2, 2, 3], [2]), [1, 3]);
test(array_diff([], [1, 2]), []);
test(array_diff([1, 2, 3], []), [1, 2, 3]);
test(array_diff([3, 4, 5], [3, 5]), [4]);
