import { renderPictures } from './picture.js';
import { debounce, shuffle } from './utils.js';


const defaultFilter = document.getElementById('filter-default');
const randomFilter = document.getElementById('filter-random');
const discussedFilter = document.getElementById('filter-discussed');

const RANDOM_PHOTOS_COUNT = 10;
const RERENDER_DELAY = 500;

const filtersContainer = document.querySelector('.img-filters');

const debouncedRenderPictures = debounce(renderPictures, RERENDER_DELAY);

function initFilters (pictures) {
  filtersContainer.classList.remove('img-filters--inactive');

  defaultFilter.addEventListener('click', () => {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    defaultFilter.classList.add('img-filters__button--active');
    debouncedRenderPictures(pictures);
  });

  randomFilter.addEventListener('click', () => {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    randomFilter.classList.add('img-filters__button--active');
    debouncedRenderPictures(shuffle(pictures).slice(0, RANDOM_PHOTOS_COUNT));
  });

  discussedFilter.addEventListener('click', () => {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    discussedFilter.classList.add('img-filters__button--active');
    debouncedRenderPictures([...pictures].sort((a, b) => b.comments.length - a.comments.length));
  });
}

export { initFilters };
