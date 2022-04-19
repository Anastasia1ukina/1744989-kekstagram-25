import {uploadForm} from './fetch.js';
import {showErrorMessage, showSuccessMessage} from './messages.js';
import { resetScale } from './scale.js';
import { resetEffect } from './effect.js';

const uploadInputElement = document.querySelector('.img-upload__input');
const uploadModalElement = document.querySelector('.img-upload__overlay');
const uploadFormElement = document.querySelector('.img-upload__form');
const uploadSubmitElement = document.getElementById('upload-submit');
const descriptionElement = uploadFormElement.querySelector('.text__description');
const hashtagsElement = uploadFormElement.querySelector('.text__hashtags');

const MAX_NUMBER_HASHTAGS = 5;
const MAX_LENGTH_COMMENT = 140;

uploadModalElement.addEventListener('click', (evt) => {
  if (evt.target === uploadModalElement) {
    resetForm();
  }
});

uploadModalElement.querySelector('.img-upload__cancel').addEventListener('click', () => {
  document.body.classList.remove('modal-open');
  resetForm();
});

document.addEventListener('keyup', (evt) => {
  if (evt.key === 'Escape') {
    document.body.classList.remove('modal-open');
    resetForm();
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

const pristine = new Pristine(uploadFormElement, {
  classTo: 'form-group',
  errorTextParent: 'form-group',
  errorTextClass: 'text__error',
});

function validateHashtagSymbols(hashtag) {
  return hashtag.match('^#[a-zа-яёЁ0-9]{1,19}$');
}

function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}

function validateHashtags (value) {
  const hashtags = value.split(' ');
  const filteredHashtags = hashtags.filter((hashtag) => hashtag.trim() !== '');
  if (filteredHashtags.length > MAX_NUMBER_HASHTAGS) {
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
  if (filteredHashtags.length > MAX_NUMBER_HASHTAGS) {
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

function resetForm() {
  resetEffect();
  resetScale();
  uploadInputElement.value = '';
  descriptionElement.value = '';
  hashtagsElement.value = '';
  uploadModalElement.classList.add('hidden');
  pristine.reset();
}

function initUploadForm() {
  pristine.addValidator(descriptionElement, (value) => value.length <= MAX_LENGTH_COMMENT, 'длина комментария не может составлять больше 140 символов');
  pristine.addValidator(hashtagsElement, validateHashtags, getHashtagsErrorMessage);

  uploadInputElement.addEventListener('change', () => {
    document.body.classList.add('modal-open');
    uploadModalElement.classList.remove('hidden');
  });
  uploadFormElement.addEventListener('submit', (evt) => {
    const isValid = pristine.validate();
    evt.preventDefault();
    if (isValid) {
      const formData = new FormData(evt.target);
      uploadSubmitElement.setAttribute('disabled', 'disabled');
      uploadForm(formData, () => {
        resetForm();
        uploadSubmitElement.removeAttribute('disabled');
        showSuccessMessage();
      }, () => {
        resetForm();
        uploadSubmitElement.removeAttribute('disabled');
        showErrorMessage('#error');
      });
    }
  });
}

export { initUploadForm };
