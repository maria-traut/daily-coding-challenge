/*
https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc
In this Kata, you will sort elements in an array by decreasing frequency of elements.
If two elements have the same frequency, sort them by increasing value.
solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
--we sort by highest frequency to lowest frequency.
*/

import { test } from "@/test.ts";

function solve(arr: number[]): number[] {
  let obj: Record<string, number> = {};
  let result: number[] = [];
  for (const char of arr) {
    if (char in obj) obj[char] = (obj[char] ?? 0) + 1;
    else obj[char] = 1;
  }

  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (const [key, value] of sorted) {
    for (let i = 0; i < value; i++) result.push(Number(key));
  }

  return result;
}

test(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]), [3, 3, 3, 5, 5, 7, 7, 2, 9]);
test(solve([1, 1, 2, 2, 3]), [1, 1, 2, 2, 3]);
test(solve([5, 5, 5]), [5, 5, 5]);
test(solve([1, 2, 3]), [1, 2, 3]);
test(solve([4, 4, 1, 1, 1, 2]), [1, 1, 1, 4, 4, 2]);
