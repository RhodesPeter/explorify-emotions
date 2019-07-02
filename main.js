const handleClick = (e) => {
  const emotion = e.target;
  emotion.insertAdjacentHTML('afterbegin', '<span class="tick">✔︎</span>')
};

[...document.querySelectorAll('.emotions__emotion')]
  .forEach(el => el.addEventListener('click', handleClick));

