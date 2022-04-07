const uploadEffectSlider = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

let effectName;
let method = '';

const effects = {
  chrome: {
    effectProperty: 'grayscale',
    unit: '',
    sliderIntensity: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  sepia: {
    effectProperty: 'sepia',
    unit: '',
    sliderIntensity: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  marvin: {
    effectProperty: 'invert',
    unit: '%',
    sliderIntensity:{
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    }
  },
  phobos: {
    effectProperty: 'blur',
    unit: 'px',
    sliderIntensity: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  },
  heat: {
    effectProperty: 'brightness',
    unit: '',
    sliderIntensity: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

function changeSliderSetting (checkedValue) {
  if (checkedValue === 'none') {
    imgUploadPreview.style.filter = 'none';
    uploadEffectSlider.classList.add('hidden');
  }
  else {
    uploadEffectSlider.classList.remove('hidden');
    const effect = effects[checkedValue];
    effectName = effect.effectProperty;
    method = effect.unit;
    sliderElement.noUiSlider.updateOptions(effect.sliderIntensity);
  }
}

function initSlider () {
  uploadEffectSlider.classList.add('hidden');

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
    imgUploadPreview.style.filter = `${effectName}(${valueElement.value + method})`;
  });

  effectsList.addEventListener('change', (evt) => {
    const checkedValue = evt.target.closest('input[type="radio"]').value;
    changeSliderSetting(checkedValue);
  });
}

export { initSlider };
