function lengthOfLongestSubstring(str) {
  let i = 0; //substring start
  let j = 0; //substring end
  let count = 0; //keeps track of longest
  let len = str.length; //full length;
  let host = new Set();

  while (i < len && j < len) { //cont until end of str
    let char = str.charAt(j);
    if (!host.has(char)) {
      host.add(char);
      j++
      count = Math.max(count, j - i);
    } else {
      host.delete(str.charAt(i));
      i++;
    }
    // console.log(host)

  }
  return count;
}