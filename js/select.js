function select() {
  const adresses = [
    {
      city: "Canandaigua, NY",
      phone: "+1 585 393 0001",
      adress: "151 Charlotte Street",
    },
    {
      city: "Yonkers, NY",
      phone: "+1 914 678 0003",
      adress: "511 Warburton Ave",
    },
    {
      city: "New York City",
      phone: "+1 212 456 0002",
      adress: "9 East 91st Street",
    },
    {
      city: "Sherrill, NY",
      phone: "+1 315 908 0004",
      adress: "14 WEST Noyes BLVD",
    },
  ];

  const select = document.querySelector(".select");
  const selectButton = document.querySelector(".select__active");
  const selectList = document.querySelector(".select__list");
  const option = document.getElementsByClassName("select__option");
  const adressInsert = document.querySelector(".contact");
  const title = document.querySelector(".select__title");

  // открываем список
  selectButton.addEventListener("click", () => {
    select.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(select))
      select.classList.toggle("active", false);
  });

  // добавляем в список все доступные города
  adresses.forEach((addres) => {
    selectList.innerHTML += `<div class="select__option">${addres.city}</div>`;
  });

  // генерируем карточку в зависимости от выбранног города
  for (let i = 0; i < option.length; i++) {
    option[i].addEventListener("click", () => {
      select.classList.add("selected");
      select.classList.toggle("active", false);
      title.innerText = `${adresses[i].city}`;
      let call = adresses[i].phone
      adressInsert.innerHTML = `
        <div class="contact__inner">
        <div class="contact__info">
        <div class="contact__column">
        <span>City:</span>
        <span>Phone:</span>
        <span>Office adress:</span>
        </div>
        <div class="contact__column">
        <span>${adresses[i].city}</span>
        <span>${adresses[i].phone}</span>
        <span>${adresses[i].adress}</span>
        </div>
        </div>
        <button class="contact__button"><a href="tel:${call.split(' ').join('')}">Call us</a></button>
        </div>
        `;
      if (window.innerWidth <= 380)
        document.querySelector(".contacts__img").style.display = "none";
      window.addEventListener("resize", () => {
        window.innerWidth <= 380
          ? (document.querySelector(".contacts__img").style.display = "none")
          : (document.querySelector(".contacts__img").style.display = "block");
      });
    });
  }
}

select();
