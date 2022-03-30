import './util.js';
import {createPictures} from './data.js';
import {renderPictures} from './photo.js';
const PHOTOS_COUNT = 25;
const pictures = Array.from({length: PHOTOS_COUNT}, createPictures);
renderPictures(pictures);
