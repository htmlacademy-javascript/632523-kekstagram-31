const PHOTOCARDS_COUNT = 25;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const COMMENTS_COUNT = 30;
const AVATAR_COUNT = 6;
const NAMES = [
  'Питер',
  'Брюс',
  'Отто',
  'Освальд',
  'Майлз',
  'Виктор',
  'Эдди',
  'Эдвард',
  'Харви'
];

const DESCRIPTIONS = [
  'На отдыхе',
  'Работа не волк',
  'Домашнее настроение',
  'У природы нет плохой погоды',
  'Лучшее заведение города',
  'Утро - такое утро',
  'Обед по расписанию',
  'Отличные виды',
  'Кто этот человек?'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId++;
    if (lastGeneratedId > PHOTOCARDS_COUNT) {
      lastGeneratedId = 1;
    }
    return lastGeneratedId;
  };
}

const generateCommentId = createIdGenerator();
const generateUserId = createIdGenerator();
const generatePhotoId = createIdGenerator();

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(MESSAGES)
  ).join(' ');

function createComment() {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };
}

const createPhotoPost = () => ({
  id: generateUserId(),
  url: `photos/${generatePhotoId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENTS_COUNT) },
    () => createComment()
  )
});

const createPhotoArray = () =>
  Array.from({ length: PHOTOCARDS_COUNT }, (_, pictureIndex) =>
    createPhotoPost(pictureIndex++)
  );

createPhotoArray();
