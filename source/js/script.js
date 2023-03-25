const header = document.querySelector('.header');
const navToggle = document.querySelector('.header__nav-toggle');

header.classList.remove('no-js');
navToggle.addEventListener('click', () => header.classList.toggle('is-open'));

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    header.classList.remove('is-open');
  }
}
);

const modalButtons = document.querySelectorAll('.modal-button');
  const modal = document.querySelector('.modal');
  const modalCloseButton = document.querySelector('.modal__button');

  const onModalButtonClick = (evt) => {
    evt.preventDefault();
    modal.classList.add('is-open');
  };

  modalButtons.forEach((button) => button.addEventListener('click', onModalButtonClick));

  modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modal.classList.remove('is-open');
    }
  });
