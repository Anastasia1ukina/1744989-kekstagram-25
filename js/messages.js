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

const showAlert = (message, time) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '50px 250px';
  alertContainer.style.fontSize = '40px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.lineHeight = 1.5;
  alertContainer.style.backgroundImage = 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, time);
};

export {showAlert};

export { showErrorMessage, showSuccessMessage };
