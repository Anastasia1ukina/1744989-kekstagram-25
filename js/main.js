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

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артём',
  'Даниил',
  'Мия',
];

const DESCRIPTIONS = [
  'Запомнил навсегда!',
  'Считаю это фото лучшее!',
  'Как вам это?',
  'Круто, да?',
];

const getRandomArrayElement = (elements) => elements[getRandom(0, elements.length - 1)];


function createObject (_, index) {
  return {
    id: index + 1,
    url: 'img/{{index + 1}}.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandom(15, 200),
    comments: Array.from({length: getRandom(1, 10)}, createComments),
  };
}

function createComments () {
  return {
    id: getRandom(200, 300),
    avatar: 'img/avatar-{{getRandom(1, 6)}}.svg',
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  };
}

const PHOTOS_COUNT = 25;
const mostPosts = Array.from({length: PHOTOS_COUNT}, createObject);

//eslint-disable-next-line
console.log(mostPosts);
