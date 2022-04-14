const errorTemplate = document.querySelector('#error').content;
const successTemplate = document.querySelector('#success').content;

const handleEscClickForSuccess = (evt) => {
  if (evt.key === 'Escape') {
    document.querySelector('.success').remove();
    document.removeEventListener('keyup', handleEscClickForSuccess);
  }
};

const handleEscClickForError = (evt) => {
  if (evt.key === 'Escape') {
    document.querySelector('.error').remove();
    document.removeEventListener('keyup', handleEscClickForError);
  }
};

function showSuccessMessage() {
  const successMessage = successTemplate.cloneNode(true);

  successMessage.querySelector('.success__button').addEventListener('click', () => {
    document.body.classList.remove('modal-open');
    document.querySelector('.success').remove();
    document.removeEventListener('keyup', handleEscClickForSuccess);
  });
  document.addEventListener('keyup', handleEscClickForSuccess);

  document.body.appendChild(successMessage);
}

function showErrorMessage() {
  const errorMessage = errorTemplate.cloneNode(true);

  errorMessage.querySelector('.error__button').addEventListener('click', () => {
    document.body.classList.remove('modal-open');
    document.querySelector('.error').remove();
    document.removeEventListener('keyup', handleEscClickForError);
  });
  document.addEventListener('keyup', handleEscClickForError);

  document.body.appendChild(errorMessage);
}

export { showErrorMessage, showSuccessMessage };
