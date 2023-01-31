export default function idmon(num = 16) {
  if (isNaN(num)) {
    return console.error('idmon Argument must be number');
  }
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function asciiPicker(min, max) {
    const val = randomNum(min, max);
    if ((val > 57 && val < 65) || (val > 90 && val < 97)) {
      return asciiPicker(min, max);
    } else {
      return String.fromCharCode(val);
    }
  }
  const iterationsArray = [];
  for (let i = 0; i < num; i++) {
    iterationsArray.push(`${asciiPicker(48, 122)}`);
  }
  return iterationsArray.join('');
}
