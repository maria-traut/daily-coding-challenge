/*
https://www.codewars.com/kata/frequency-sequence
Return an output string that translates an input string s/$s by replacing each character in s/$s
with a number representing the number of times that character occurs in s/$s and separating each number
with the character(s) sep/$sep.
*/

import { test } from "@/test.ts";

function freqSeq(str: string, sep: string): string {
  const splitString = str.split("");
  let result = [];
  for (let i = 0; i < splitString.length; i++) {
    const currentCharacter = splitString[i];
    let characterCount = 0;
    for (const character of splitString) {
      if (character === currentCharacter) {
        characterCount++;
      }
    }
    result.push(characterCount);
  }
  return result.join(sep);
}

test(freqSeq("hello", "-"), "1-1-2-2-1");
test(freqSeq("aab", ","), "2,2,1");
test(freqSeq("abc", "|"), "1|1|1");
test(freqSeq("aaa", "."), "3.3.3");
test(freqSeq("abab", "-"), "2-2-2-2");
