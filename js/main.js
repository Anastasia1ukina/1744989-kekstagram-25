import './util.js';
import './scale.js';
import './filters.js';
import {renderPictures} from './picture.js';
import {initUploadForm} from './form.js';
import {initSlider} from'./effect.js';
import {fetchPictures} from './fetch.js';
import {resetFileInput} from './upload-picture.js';

window.onload = function () {
  initUploadForm();
  initSlider();
  fetchPictures(renderPictures);
  resetFileInput();
};

