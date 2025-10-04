const modalBtnEl = document.querySelector('.hero-btn');
const backdropEl = document.querySelector('.modal-overlay');
const closeBtnEl = document.querySelector('.modal .modal-close-btn');
const bodyEl = document.body;

modalBtnEl.addEventListener('click', toggleModal);
closeBtnEl.addEventListener('click', toggleModal);

function toggleModal() {
  backdropEl.classList.toggle('is-open');

  if (backdropEl.classList.contains('is-open')) {
    bodyEl.style.overflow = 'hidden';
  } else {
    bodyEl.style.overflow = 'visible';
  }
}
