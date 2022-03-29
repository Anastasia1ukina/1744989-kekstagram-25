function getRandom(min, max) {
  if (min >= 0 && max >= min) {
    return Math.floor(Math.random() *(max - min)) + min;
  } else {
    return 'Invalid Input Parameters';
  }
}

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];
export { getRandomArrayElement, getRandom };
