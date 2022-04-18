const uploadFormElement = document.querySelector('.img-upload__form');
const uploadInputElement = uploadFormElement.querySelector('.img-upload__input');
const imgUploadPreview = uploadFormElement.querySelector('.img-upload__preview img');
const photoEffectsPreview = uploadFormElement.querySelectorAll('.effects__preview');

const PHOTO_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_PREVIEW_IMAGE = 'img/upload-default-image.jpg';

uploadInputElement.addEventListener('change', (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();

  const isFormatValid = PHOTO_TYPES.some((type) => fileName.endsWith(type));

  if (isFormatValid) {

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      imgUploadPreview.src = reader.result;
      photoEffectsPreview.forEach((preview) => {
        preview.style.backgroundImage = `url('${reader.result}')`;
      });
    });

    reader.readAsDataURL(file);
  }
});

export function resetFileInput() {
  uploadInputElement.value = '';

  imgUploadPreview.src = DEFAULT_PREVIEW_IMAGE;
  photoEffectsPreview.src = DEFAULT_PREVIEW_IMAGE;
}
