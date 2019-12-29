function longestPalindrome(str) {
  let max = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;

      while (str[left] && str[left] === str[right]) {
        left--;
        right++;
      }

      if ((right - left - 1) > max.length) {
        max = str.substring(left + 1, right);
      }

      if (Math.ceil(max.length / 2) >= str.length - i) break;
    }
  }
  return max;
}
// Input: "babad"
// Output: "bab"
// Note: "aba"
// is also a valid answer.

// Input: "cbbd"
// Output: "bb"

console.log(longestPalindrome("babad"));
// longestPalindrome("cbbd");
