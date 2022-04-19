import './utils.js';
import './scale.js';
import './filters.js';
import {renderPictures} from './picture.js';
import {initUploadForm} from './form.js';
import {initSlider} from'./effect.js';
import {fetchPictures} from './fetch.js';
import {resetFileInput} from './upload-picture.js';
import {initFilters} from './filters.js';
import { showErrorMessage } from './messages.js';

window.addEventListener('DOMContentLoaded', () => {
  initUploadForm();
  initSlider();
  fetchPictures((pictures) => {
    renderPictures(pictures);
    initFilters(pictures);
  }, () => {
    showErrorMessage('#fetching-error');
  });
  resetFileInput();
});

