function reverse(x) {
  let reversed = 0;
  let sign = x < 0;
  x = Math.abs(x);
  while (x) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  };
  //0x7FFFFFFF hexmask for maximum 32bit val
  return reversed > 0x7FFFFFFF ? 0 : sign ? -reversed : reversed;
}