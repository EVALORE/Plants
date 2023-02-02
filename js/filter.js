function filter() {
  const cards = document.querySelectorAll(".card");
  const options = document.querySelectorAll(".button");

  // функция для подсчета активных кнопок
  function count(a) {
    let count = Array.from(a);
    count = count.reduce(
      (s, a) => (a.classList.contains("active") ? (s = s + 1) : s),
      0
    );
    // возвращяет количество
    return count;
  }

  options.forEach((button, _, buttons) => {
    button.addEventListener("click", () => {
      // вкл/выкл active для у кнопок при нажатии на кнопку
      button.classList.toggle("active");

      // записываем количество активных кнопок в переменную active
      let active = count(options);

      // если активных кнопок будет 3, то для третей кнопки снимает класс active и анулируем дальнейщее выполнение процесса
      if (active == 3) {
        button.classList.toggle("active", false);
        return;
      }

      // вкл/выкл blur у карточек
      cards.forEach((card) => {
        // если 0 то выкл у всех, иначе вкл у всех
        active == 0
          ? card.classList.toggle("blur", false)
          : card.classList.toggle("blur", true);

        // перебираем все кнопачки с классом актив и если у них есть совпадения карточкой то выкл blur
        buttons.forEach((match) => {
          if (
            match.classList.contains("active") &&
            match.dataset.filter == card.dataset.content
          )
            card.classList.toggle("blur", false);
        });
      });
    });
  });
}

filter();
