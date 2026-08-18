/*
Given a string, remove any characters that are unique from the string.
Example:
input: "abccdefee"
output: "cceee"
*/

import { test } from "@/test.ts";

function onlyDuplicates(s: string): string {
  let duplicates: string[] = [];
  const splitString = s.split(""); // a b c c d e f e e
  // für jeden wert prüfen: gibt es diesen wert noch einmal
  // wenn ja: duplicates.push(wert)
  // wenn nein: return
  for (let i = 0; i < splitString.length; i++) {
    const current = splitString[i];
    if (splitString.indexOf(current) !== i) {
      duplicates.push(current);
    }
  }
  return duplicates.join("");
}

test(onlyDuplicates("abccdefee"), "cceee");
test(onlyDuplicates("abcde"), "");
test(onlyDuplicates("aabbcc"), "aabbcc");
test(onlyDuplicates("hello"), "ll");
test(onlyDuplicates(""), "");
