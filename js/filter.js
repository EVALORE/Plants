function filter() {
  const item = document.querySelectorAll('.service__item');

  const options = document.querySelector('.serivce__btns');

  console.log(options);

  options.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        item.forEach((item) => {
            item.classList.remove('blur')
            if (item.dataset.content != e.target.dataset.filter) {
              item.classList.add('blur')
          }
      });
    }
    console.log(e.target.dataset.filter);
  });
}

filter();
