const num = 32415646542514.26;

console.log(num);

function prettifyNumbersFixed(number) {
  // Inserts spaces: 4600000.50 -> 4 600 000.50
  number = number + "";
  let str = number.slice(-6);
  for (let i = number.length - 6; i > -1; i = i - 3) {
    str = number.slice(i - 3, i) + " " + str;
  }
  return str;
}

console.log(prettifyNumbersFixed(num));
