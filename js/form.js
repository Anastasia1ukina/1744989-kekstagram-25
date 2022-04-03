const uploadInput = document.querySelector('.img-upload__input');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const descriptionElement = uploadForm.querySelector('.text__description');
const hashtagsElement = uploadForm.querySelector('.text__hashtags');

uploadModal.querySelector('.img-upload__cancel').addEventListener('click', () => {
  document.body.classList.remove('modal-open');
  uploadModal.classList.add('hidden');
});

document.addEventListener('keyup', (evt) => {
  if (evt.key === 'Escape') {
    uploadInput.value = '';
    uploadModal.classList.add('hidden');
  }
});

hashtagsElement.addEventListener('keyup', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

descriptionElement.addEventListener('keyup', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

const pristine = new Pristine(uploadForm);

// const uploadPreview = document.querySelector('.img-upload__preview');

function validateHashtagSymbols(hashtag) {
  return hashtag.match('^#[a-zа-яёЁ0-9]{1,19}$');
}

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

function validateHashtags (value) {
  const hashtags = value.split(' ');
  const filteredHashtags = hashtags.filter((hashtag) => hashtag.trim() !== '');
  if (filteredHashtags.length > 5) {
    return false;
  }
  const hashtagValid = filteredHashtags.every(validateHashtagSymbols);
  if (!hashtagValid) {
    return false;
  }
  if (hasDuplicates(filteredHashtags)) {
    return false;
  }
  return true;
}

function getHashtagsErrorMessage (value) {
  const hashtags = value.split(' ');
  const filteredHashtags = hashtags.filter((hashtag) => hashtag.trim() !== '');
  if (filteredHashtags.length > 5) {
    return 'нельзя указать больше пяти хэш-тегов';
  }
  const hashtagValid = filteredHashtags.every(validateHashtagSymbols);
  if (!hashtagValid) {
    return 'хэш-теги должны начинаться с символа # (решётка)<br />' +
      'строка после решётки должна состоять из букв и чисел и не может содержать пробелы<br />' +
      'хеш-тег не может состоять только из одной решётки<br />' +
      'максимальная длина одного хэш-тега 20 символов, включая решётку';
  }
  if (hasDuplicates(filteredHashtags)) {
    return 'один и тот же хэш-тег не может быть использован дважды';
  }
}

function initUploadForm() {
  pristine.addValidator(descriptionElement, (value) => value.length <= 140, 'длина комментария не может составлять больше 140 символов');
  pristine.addValidator(hashtagsElement, validateHashtags, getHashtagsErrorMessage);

  uploadInput.addEventListener('change', () => {
    uploadModal.classList.remove('hidden');
  });
  uploadForm.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    if (isValid) {
      // eslint-disable-next-line no-console
      console.log(isValid);
    } else {
      evt.preventDefault();
      // eslint-disable-next-line no-console
      console.log(isValid);
    }
  });
}

export { initUploadForm };
