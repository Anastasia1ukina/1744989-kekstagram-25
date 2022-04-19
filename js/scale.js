const imgUploadPreview = document.querySelector('.img-upload__preview img');
const scaleToSmaller = document.querySelector('.scale__control--smaller');
const scaleToBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

const STEP_VALUE = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

let scaleValue = scaleControlValue.value;

scaleToSmaller.addEventListener('click', () => {
  scaleValue = parseInt(scaleValue, 10) - Number(STEP_VALUE);
  if (scaleValue < MIN_VALUE) {
    scaleValue = MIN_VALUE;
  }
  scaleControlValue.value = `${scaleValue}%`;
  applySizeImg();
});

scaleToBigger.addEventListener('click', () => {
  scaleValue = parseInt(scaleValue, 10) + Number(STEP_VALUE);
  if (scaleValue > MAX_VALUE) {
    scaleValue = MAX_VALUE;
  }
  scaleControlValue.value = `${scaleValue}%`;
  applySizeImg();
});

function applySizeImg () {
  imgUploadPreview.style.transform = `scale(${parseInt(scaleControlValue.value, 10) / 100})`;
}

function resetScale () {
  scaleValue = 100;
  scaleControlValue.value = `${scaleValue}%`;
  applySizeImg ();
}

export { resetScale };
