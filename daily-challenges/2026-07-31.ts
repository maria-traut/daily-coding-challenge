/*
Write a function that takes in a string of one or more words, and returns the same string, but with all
five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of
only letters and spaces. Spaces will be included only when more than one word is present.
*/

import { test } from "@/test.ts";

function spinWords(s: string): string {
  const resultArray: string[] = [];
  const splitString: string[] = s.split(" ");

  for (const word of splitString) {
    if (word.length < 5) {
      resultArray.push(word);
    }

    if (word.length >= 5) {
      const reversedWord = word.split("").reverse().join("");
      resultArray.push(reversedWord);
    }
  }

  const result: string = resultArray.join(" ");
  return result;
}

test(spinWords("Welcome"), "emocleW");
test(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
test(spinWords("This is a test"), "This is a test");
test(spinWords("go"), "go");
test(spinWords("reverse these words now"), "esrever eseht sdrow now");
