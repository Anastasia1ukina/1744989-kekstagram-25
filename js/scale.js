const imgUploadPreview = document.querySelector('.img-upload__preview img');
const scaleToSmaller = document.querySelector('.scale__control--smaller');
const scaleToBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

const stepValue = 25;
const minValue = 25;
const maxValue = 100;
// Хранимое значение
let scaleValue = scaleControlValue.value;

scaleToSmaller.addEventListener('click', () => {
  scaleValue = Number(scaleValue) - Number(stepValue);
  if (scaleValue < minValue) {
    scaleValue = minValue;
  }
  scaleControlValue.value = scaleValue;
  applySizeImg();
});

scaleToBigger.addEventListener('click', () => {
  scaleValue = Number(scaleValue) + Number(stepValue);
  if (scaleValue > maxValue) {
    scaleValue = maxValue;
  }
  scaleControlValue.value = scaleValue;
  applySizeImg();
});

// Функция привязки значения для картинки
function applySizeImg () {
  imgUploadPreview.style.transform = `scale(${  scaleControlValue.value / 100  })`;
}
