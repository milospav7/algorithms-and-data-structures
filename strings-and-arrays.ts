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
