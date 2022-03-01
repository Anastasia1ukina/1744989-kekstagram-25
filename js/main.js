// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandom(min, max) {
  if (min >= 0 && max >= min) {
    return Math.floor(Math.random() *(max - min)) + min;
  } else {
    return 'Invalid Input Parameters';
  }
}
getRandom(10, 20);

// Функция для проверки максимальной длины строки

function getLength(str, max) {
  if (str.length < max) {
    return true;
  } else {
    return false;
  }
}
getLength(1, 1);
