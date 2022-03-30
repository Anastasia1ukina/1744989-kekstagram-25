const picturesContainer = document.querySelector('.pictures');

const template = document.querySelector('#picture').content.querySelector('.picture');

function renderPictures (pictures) {
  const fragment = document.createDocumentFragment ();
  pictures.forEach(({url, likes, comments}) => {
    const photoElement = template.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(photoElement) ;
  });
  picturesContainer.appendChild(fragment);
}
export { renderPictures };
