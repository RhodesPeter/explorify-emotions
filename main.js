const handleClick = (e) => {
  const emotion = e.target;

  if (e.altKey === false) {
    emotion.insertAdjacentHTML('afterbegin', '<span class="tick">✔︎</span>')
  } else {
    emotion.insertAdjacentHTML('afterbegin', '<div class="dot"></div>')
  }
};

[...document.querySelectorAll('.emotions__emotion')]
  .forEach(el => el.addEventListener('click', handleClick));
