function getRandom(min, max) {
  if (min >= 0 && max >= min) {
    return Math.floor(Math.random() *(max - min)) + min;
  } else {
    return 'Invalid Input Parameters';
  }
}

// function checkLength(str, max) {
//   return str.length < max;
// }
// checkLength(1, 1);

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];
export {getRandomArrayElement};
export {getRandom};
