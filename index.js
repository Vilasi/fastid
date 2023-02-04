const idRegistry = [];
let recursionChecker = 0;

export default function idmon(num = 16) {
  //Maximum Unique IDs Reached Check
  if (recursionChecker > 10) {
    return console.error(
      'ERROR IDMon - Maximum Unique IDs reached. Increase ID size for more unique values.'
    );
  }

  // Error Handling
  if (isNaN(num) || !num || num < 1) {
    return console.error(
      'idmon Argument must be number greater than or equal to 1'
    );
  }

  const iterationsArray = [];
  const minimumAsciiValue = 48;
  const maximumAsciiValue = 122;

  for (let i = 0; i < num; i++) {
    iterationsArray.push(
      `${asciiPicker(minimumAsciiValue, maximumAsciiValue)}`
    );
  }

  const id = iterationsArray.join('');

  // Check if ID has already been generated.
  if (idRegistry.length > 0 && idRegistry.indexOf(id) !== -1) {
    console.log(idRegistry);
    recursionChecker++;
    return idmon(num);
  } else {
    idRegistry.push(id);
    return id;
  }
}

function asciiPicker(min, max) {
  let randomValue = randomNum(min, max);

  //If randomValue falls within specified number range within the while loop's conditional, randomNum() is called until a value outside of specified range is returned.
  //This ensures only ASCII Values corresponding to: a-z, A-Z, 0-9 are utilized.
  while (
    (randomValue > 57 && randomValue < 65) ||
    (randomValue > 90 && randomValue < 97)
  ) {
    randomValue = randomNum(min, max);
  }

  //Convert ASCII Code to corresponding value and return value as string.
  return String.fromCharCode(randomValue);
}

//Get random number within specified minimum constraint and maximum constraint.
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const array = [];
for (let i = 0; i < 50; i++) {
  array.push(idmon(1));
}
