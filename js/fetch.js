export const fetchPictures = (onSuccess, onError) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then(onSuccess)
    .catch(onError);
};

export const uploadForm = (formData, onSuccess, onError) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData,
    },
  ).then(onSuccess)
    .catch(onError);
};
