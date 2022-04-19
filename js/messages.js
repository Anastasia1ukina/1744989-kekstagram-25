const successTemplate = document.querySelector('#success').content;

const onEscClickForSuccessHandle = (evt) => {
  if (evt.key === 'Escape') {
    document.querySelector('.success').remove();
    document.removeEventListener('keyup', onEscClickForSuccessHandle);
  }
};

const onWindowClickForSuccess = (evt) => {
  if (!evt.target.closest('div')) {
    document.querySelector('.success').remove();
    document.removeEventListener('click', onWindowClickForSuccess);
  }
};

const onWindowClickForError = (evt) => {
  if (!evt.target.closest('div')) {
    document.querySelector('.error').remove();
    document.removeEventListener('click', onWindowClickForError);
  }
};

const onEscClickForErrorHandle = (evt) => {
  if (evt.key === 'Escape') {
    document.querySelector('.error').remove();
    document.removeEventListener('keyup', onEscClickForSuccessHandle);
  }
};

function showSuccessMessage() {
  const successMessage = successTemplate.cloneNode(true);

  successMessage.querySelector('.success__button').addEventListener('click', () => {
    document.body.classList.remove('modal-open');
    document.querySelector('.success').remove();
    document.removeEventListener('click', onWindowClickForSuccess);
    document.removeEventListener('keyup', onEscClickForSuccessHandle);
  });
  document.addEventListener('click', onWindowClickForSuccess);
  document.addEventListener('keyup', onEscClickForSuccessHandle);

  document.body.appendChild(successMessage);
}

function showErrorMessage(messageId) {
  const errorTemplate = document.querySelector(messageId).content;
  const errorMessage = errorTemplate.cloneNode(true);

  errorMessage.querySelector('.error__button').addEventListener('click', () => {
    document.body.classList.remove('modal-open');
    document.querySelector('.error').remove();
    document.removeEventListener('click', onWindowClickForError);
    document.removeEventListener('keyup', onEscClickForErrorHandle);
  });
  document.addEventListener('click', onWindowClickForError);
  document.addEventListener('keyup', onEscClickForErrorHandle);

  document.body.appendChild(errorMessage);
}


export { showErrorMessage, showSuccessMessage };
