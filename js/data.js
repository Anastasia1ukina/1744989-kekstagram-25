import {getRandomArrayElement} from './util.js';
import {getRandom} from './util.js';
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

function createPictures (_, index) {
  return {
    id: index + 1,
    url: `img/logo-background-${index % 3 + 1}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandom(15, 200),
    comments: Array.from({length: getRandom(1, 10)}, createComments),
  };
}

function createComments () {
  return {
    id: getRandom(200, 300),
    avatar: `img/avatar-${getRandom(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  };
}

export {createPictures};

