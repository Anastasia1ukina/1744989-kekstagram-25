const picturesContainer = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const pictureModal = document.querySelector('.big-picture');

// const postCommentBlock = document.querySelector('.social__comments');
// const commentCount = document.querySelector('.social__comment-count');
// const commentLoadMore = document.querySelector('.social__comments-loader');

// const STEP_OPEN_COMMENTS = 5;

// const createCommentElement = function (comment) {
//   const cloneComment = postCommentBlock.querySelector('.social__comment').cloneNode(true);
//   const commentAvatar = cloneComment.querySelector('.social__picture');
//   const commentMessage = cloneComment.querySelector('.social__text');

//   commentAvatar.src = comment.avatar;
//   commentAvatar.alt = comment.name;
//   commentMessage.textContent = comment.message;

//   return cloneComment;
// };

pictureModal.querySelector('.big-picture__cancel').addEventListener('click', () => {
  document.body.classList.remove('modal-open');
  pictureModal.classList.add('hidden');
});

document.addEventListener('keyup', (evt) => {
  if (evt.key === 'Escape') {
    pictureModal.classList.add('hidden');
  }
});

function openPictureModal (picture) {
  document.body.classList.add('modal-open');
  pictureModal.classList.remove('hidden');
  pictureModal.querySelector('.big-picture__img').querySelector('img').src = picture.url;
  pictureModal.querySelector('.social__caption').innerText = picture.description;
  pictureModal.querySelector('.likes-count').textContent = picture.likes;
  pictureModal.querySelector('.comments-count').textContent = picture.comments;
  pictureModal.querySelector('.social__comment-count').classList.add('hidden');
  pictureModal.querySelector('.comments-loader').classList.add('hidden');
  const comments = picture.comments.map((comment) => `<li class="social__comment">
    <img
        class="social__picture"
        src="${comment.avatar}"
        alt="${comment.name}"
        width="35" height="35">
    <p class="social__text">${comment.message}</p>
</li>`);
  pictureModal.querySelector('.social__comments').innerHTML = comments.join();
}

function renderPictures (pictures) {
  const fragment = document.createDocumentFragment ();

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
