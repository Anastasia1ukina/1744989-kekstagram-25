function getRandom(min, max) {
  if (min >= 0 && max >= min) {
    return Math.floor(Math.random() *(max - min)) + min;
  } else {
    return 'Invalid Input Parameters';
  }
}

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];

const ESC_KEY_CODE = 27;

const isEscapeKey = (evt, action) => {
  if (evt.keyCode === ESC_KEY_CODE) {
    action();
  }
};

export { getRandomArrayElement, getRandom, isEscapeKey};
