import {createPhotoArray} from './data.js';

const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const usersPictures = createPhotoArray();
const picturesFragment = document.createDocumentFragment();

usersPictures.forEach((photo) => {
  const thumbnail = picturesTemplate.cloneNode(true);
  const picture = thumbnail.querySelector('.picture__img');
  picture.src = photo.url;
  picture.alt = photo.description;
  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  picturesFragment.append(thumbnail);
});

picturesContainer.append(picturesFragment);
