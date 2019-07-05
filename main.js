const handleEmojiClick = (e) => {
  const emotion = e.target;

  if (e.altKey === false) {
    emotion.insertAdjacentHTML('afterbegin', '<span class="tick">✔︎</span>')
  } else {
    emotion.insertAdjacentHTML('afterbegin', '<div class="dot"></div>')
  }
};

const handleBurgerClick = (e) => {
  e.target.classList.toggle('burger--active');
  document.querySelector('.nav__list').classList.toggle('hidden');
};

[...document.querySelectorAll('.emotions__emotion')]
  .forEach(el => el.addEventListener('click', handleEmojiClick));

document.querySelector('.burger').addEventListener('click', handleBurgerClick);
