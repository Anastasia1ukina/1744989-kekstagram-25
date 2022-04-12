import './util.js';
import './scale.js';
import {renderPictures} from './picture.js';
import {initUploadForm} from './form.js';
import {initSlider} from'./effect.js';
import {fetchPictures} from './fetch.js';

window.onload = function () {
  initUploadForm();
  initSlider();
  fetchPictures(renderPictures);
};

