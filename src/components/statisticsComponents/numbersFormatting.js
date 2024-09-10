export function formatNumber(number) {
  number = number + "";
  const dotIndex = number.indexOf(".");

  const k = dotIndex < 0 ? 3 : 3 + number.length - dotIndex;

  let str = number.slice(-k);
  for (let i = number.length - k; i > -1; i = i - 3) {
    if (i - 3 > -1) {
      str = number.slice(i - 3, i) + " " + str;
    } else {
      str = number.slice(0, i) + " " + str;
      break;
    }
  }
  return str;
}
