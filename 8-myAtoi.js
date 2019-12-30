// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non - whitespace character is found.Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this
// function.

// If the first sequence of non - whitespace characters in str is not a valid integral number, or
// if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Only the space character ' ' is considered as whitespace character.
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
// 0x7FFFFFFF = bitmap for maximum 32 bit integer 
function myAtoi(str) {
  let int = parseInt(str);
  return int > 0x7FFFFFFF ? 0x7FFFFFFF : int < -0x7FFFFFFF ? -0x7FFFFFFF : isNaN(int) ? 0 : int;
}

// str = '42' // 42
// str = "   -42" // -42
// str = "4193 with words" // 4193
// str = "words and 987" // 0
// str = "-91283472332" // -2147483648

console.log(myAtoi(str));