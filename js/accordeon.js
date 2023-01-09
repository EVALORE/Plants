function accordeon() {
  const item = document.querySelectorAll('.accordeon__option');

  item.forEach((event) => {
    event.addEventListener('click', () => {
      if (event.classList.contains('active')) {
        event.classList.remove('active');
      } else {
        item.forEach((e) => {
          e.classList.remove('active');
        });
        event.classList.add('active');
      }
    });
  });

}

accordeon()