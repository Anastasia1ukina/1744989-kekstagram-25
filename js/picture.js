const picturesContainer = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const pictureModal = document.querySelector('.big-picture');

const LOAD_COMMENTS_STEP = 5;
let totalCommentsCount = 0;
let loadedCommentsCount = 0;
let pictureCopy;

const loadMoreCommentsElement = document.querySelector('.social__comments-loader');

pictureModal.addEventListener('click', (evt) => {
  if (evt.target === pictureModal) {
    closePictureModal();
  }
});

pictureModal.querySelector('.big-picture__cancel').addEventListener('click', () => {
  closePictureModal();
});

document.addEventListener('keyup', (evt) => {
  if (evt.key === 'Escape') {
    closePictureModal();
  }
});

function closePictureModal () {
  document.body.classList.remove('modal-open');
  pictureModal.classList.add('hidden');
  loadMoreCommentsElement.removeEventListener('click', onLoadComments);
}

function createComment(comment) {
  return `<li class="social__comment">
    <img
    class="social__picture"
    src="${comment.avatar}"
    alt="${comment.name}"
    width="35" height="35">
    <p class="social__text">${comment.message}</p>
    </li>`;
}

function onLoadComments() {
  const comments = pictureCopy.comments.slice(loadedCommentsCount, loadedCommentsCount + LOAD_COMMENTS_STEP).map(createComment);
  pictureModal.querySelector('.social__comments').insertAdjacentHTML('beforeend', comments.join(''));
  loadedCommentsCount = loadedCommentsCount + LOAD_COMMENTS_STEP;

  if (totalCommentsCount <= loadedCommentsCount) {
    pictureModal.querySelector('.loaded-comments-count').textContent = totalCommentsCount;
    loadMoreCommentsElement.classList.add('hidden');
  } else {
    pictureModal.querySelector('.loaded-comments-count').textContent = loadedCommentsCount;
  }
}

function openPictureModal (picture) {
  pictureCopy = picture;
  totalCommentsCount = picture.comments.length;
  document.body.classList.add('modal-open');
  pictureModal.classList.remove('hidden');
  pictureModal.querySelector('.big-picture__img').querySelector('img').src = picture.url;
  pictureModal.querySelector('.social__caption').innerText = picture.description;
  pictureModal.querySelector('.likes-count').textContent = picture.likes;
  pictureModal.querySelector('.total-comments-count').textContent = totalCommentsCount;
  pictureModal.querySelector('.social__comments').innerHTML = '';

  loadedCommentsCount = 0;
  loadMoreCommentsElement.classList.remove('hidden');
  loadMoreCommentsElement.addEventListener('click', onLoadComments);
  onLoadComments();
}

function renderPictures (pictures) {
  const fragment = document.createDocumentFragment ();

  picturesContainer.querySelectorAll('.picture').forEach((el) => el.remove());

  pictures.forEach((picture) => {
    const photoElement = template.cloneNode(true);
    photoElement.querySelector('.picture__img').src = picture.url;
    photoElement.querySelector('.picture__likes').textContent = picture.likes;
    photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
    photoElement.addEventListener('click', () => {
      openPictureModal(picture);
    });
    fragment.appendChild(photoElement) ;
  });

  picturesContainer.appendChild(fragment);
  picturesContainer.classList.remove('hidden');
}

export { renderPictures };
