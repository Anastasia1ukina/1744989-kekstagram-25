import {renderPictures} from './picture.js';

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((picture) => {
    renderPictures(picture);
  });
