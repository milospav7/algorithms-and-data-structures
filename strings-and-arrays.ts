// 1. Reverse input
function reverseString(str: string) {
  if (str.length === 0 || str.trim().length === 0) return str;
  return str.split("").reverse().join("");
}

console.log(reverseString(""));
console.log(reverseString("wolfs"));

// 2. Check if string is palindromre
function isPalindrome(str: string) {
  if (str.length === 0 || str.trim().length === 0) return false;
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}

console.log(isPalindrome("Noou"));
console.log(isPalindrome("Hannah"));

// 3. Reverse an integer
function reverseInteger(int: number) {
  if (Math.abs(int) < 10) return int;
  const reversed = int.toString().split("").reverse().join("");
  return Math.sign(int) * Number(reversed);
}

console.log(reverseInteger(2));
console.log(reverseInteger(123));

// 4. Find letter with maximum occurance in string
function getMaxChar(str: string) {
  if (str.length === 0 || str.trim().length === 0) return str;

  const splittedString = str.split("");
  let charsCounter = {};
  let maxChar = "";
  let maxCount = 0;

  splittedString.forEach((char) => {
    const count = char in charsCounter ? ++charsCounter[char] : 1;
    charsCounter[char] = count;

    if (count > maxCount) {
      maxChar = char;
      maxCount = count;
    }
  });

  return maxChar;
}

console.log(getMaxChar("Jedan"));
console.log(getMaxChar("Annannnass"));

// 5. Chunk array in "n" chunks
function arrayToChunks(arr: any[], chunkSize: number) {
  if (arr.length <= chunkSize) return arr;

  let chunks = [];
  let chunkStartIndex = 0;

  do {
    chunks.push(arr.slice(chunkStartIndex, chunkStartIndex + chunkSize));
    chunkStartIndex += chunkSize;
  } while (chunkStartIndex < arr.length);

  return chunks;
}

console.log(arrayToChunks([1, 2, 3, 4], 4));
console.log(arrayToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(arrayToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// 6. Check whether two strings are anagrams
function cleanString(str: string) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
}

function areAnagrams(str1: string, str2: string) {
  if (str1.length === 0 || str1.trim().length === 0) return false;
  if (str2.length === 0 || str2.trim().length === 0) return false;

  return cleanString(str1) === cleanString(str2);
}

console.log(areAnagrams("angel", "glean"));
console.log(areAnagrams("mixa", "wixa"));
console.log(areAnagrams("night", "thing"));

// 7. Capitalize first letter of each word in sentence
function capitalizeWords(str: string) {
  if (str.length === 0 || str.trim().length === 0) return str;

  const splitted = str.split("");
  const capitalized = splitted.map((char, ind) => {
    if (ind === 0) return char.toUpperCase();
    if (splitted[ind - 1] === " ") return char.toUpperCase();
    return char;
  });

  return capitalized.join("");

  // 2nd way
  let words = [];
  const splittedByWhiteSpace = str.split("");

  for (let word of splittedByWhiteSpace) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

console.log(capitalizeWords("winter is coming"));

// 8. Print "n" steps
function printSteps(n: number) {
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let j = 0; j < n; j++) {
      const part = j <= i ? "#" : " ";
      step += part;
    }
    console.log(step);
  }
}

printSteps(2);
printSteps(3);
printSteps(4);

// 9. Print "n" steps using recursion
function printStepsRecursively(n: number, step = "", row = 0) {
  // Check the base case to stop execution
  if (row === n) {
    return;
  }

  // General cases
  if (step.length === n) {
    console.log(step);
    return printStepsRecursively(n, "", row + 1);
  }

  let part = step.length <= row ? "#" : " ";
  printStepsRecursively(n, step + part, row);
}

printStepsRecursively(2);
printStepsRecursively(3);
printStepsRecursively(4);

// 10. Print "n" levels pyramid
function printPyramid(n: number) {
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      let level = "";
      for (let j = 0; j < 2 * n - 1; j++) {
        let part = j >= n - 1 - i && j <= n - 1 + i ? "#" : " ";
        level += part;
      }
      console.log(level);
    }
  }
}
// 0123456
// xxx#xxx 0
// xx###xx 1
// x#####x 2
// ####### 3
printPyramid(1);
printPyramid(3);
printPyramid(5);

// 11. Count string vowels
function countVowels(str: string) {
  if (str.length === 0 || str.trim().length === 0) return str;

  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  str.split("").forEach((char) => {
    if (vowels.includes(char)) counter += 1;
  });

  console.log(counter);

  // Second way
  const matches = str.match(/[aeiou]/gi) ?? [];
  console.log(matches.length);
}

countVowels("Dejan");
countVowels("Milija");

// 12. Fibbonaci - resolve nth element in itterative way - [0,1,1,2,3,5,8,13...]
function fibbonaciIterattive(n: number) {
  if (n <= 2) return n;
  let fib = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  // console.log(fib[fib.length - 1]);

  let first = 1;
  let second = 1;

  for (let i = 3; i < n; i++) {
    let temp = first;
    first = second;
    second = temp + second;
  }
  console.log(first + second);
}

fibbonaciIterattive(3);
fibbonaciIterattive(7);
