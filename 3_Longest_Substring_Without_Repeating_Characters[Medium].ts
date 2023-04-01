/*
Given a string s, find the length of the longest substring without repeating characters.


Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
* */
function lengthOfLongestSubstring(s: string): number {
  let hashTable: { [key: string]: number } = {};
  let maxLength = 0;

  const checkPrevSymbol = (i: number) => {
    if (i > 0 && hashTable[s[i - 1]] === undefined) {
      i--;
      hashTable[s[i]] = i;
      checkPrevSymbol(i);
    }
  };

  for (let i = 0; i < s.length; i++) {
    if (hashTable[s[i]] !== undefined) {
      hashTable = { [s[i]]: i };
      checkPrevSymbol(i);
    }

    hashTable[s[i]] = i;
    const currentLength = Object.keys(hashTable).length;
    maxLength = currentLength > maxLength ? currentLength : maxLength;
  }

  return maxLength;
}


// Optimized solution
function lengthOfLongestSubstringOptimized(s: string): number {
  // Initialize an array of 128 elements, each element representing the last index
  // where the corresponding ASCII character appears in the current substring.
  const chars: (number | null)[] = new Array(128).fill(null);
  // Initialize the left and right ends of the current substring to the start of the string.
  let left = 0;
  let right = 0;
  // Initialize the maximum length seen so far to 0.
  let res = 0;
  // Loop through the string from left to right.
  while (right < s.length) {
    // Get the character at the current right end of the substring.
    const r: string = s[right];
    // Get the index of the last occurrence of the current character in the current substring.
    const index: number | null = chars[r.charCodeAt(0)];
    // If the current character is already in the current substring, and its last occurrence is
    // between the left and right ends of the current substring, move the left end of the substring
    // to the right of the last occurrence of the current character.
    if (index !== null && index >= left && index < right) {
      left = index + 1;
    }
    // Calculate the length of the current substring, and update the maximum length seen so far if necessary.
    res = Math.max(res, right - left + 1);
    // Update the index of the last occurrence of the current character to the current right end of the substring.
    chars[r.charCodeAt(0)] = right;
    // Move the right end of the substring one character to the right.
    right++;
  }
  // Return the maximum length seen so far.
  return res;
}


// console.log(lengthOfLongestSubstringOptimized('bbbbb'), 1);
// console.log(lengthOfLongestSubstringOptimized('abcabcbb'), 3);
// console.log(lengthOfLongestSubstringOptimized('pwwkew'), 3);
// console.log(lengthOfLongestSubstringOptimized(' '), 1);
// console.log(lengthOfLongestSubstringOptimized(''), 0);
// console.log(lengthOfLongestSubstringOptimized('uqinntq'), 4);
