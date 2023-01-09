function dropDown() {
  const adresses = [
    {
      city: 'Canandaigua, NY',
      phone: '+1	585	393 0001',
      adress: '151 Charlotte Street',
    },
    {
      city: 'Yonkers, NY',
      phone: '+1	914	678 0003',
      adress: '511 Warburton Ave',
    },
    {
      city: 'New York City',
      phone: '+1	212	456 0002',
      adress: '9 East 91st Street',
    },
    {
      city: 'Sherrill, NY',
      phone: '+1	315	908 0004',
      adress: '14 WEST Noyes BLVD',
    },
  ];

  const dropDown = document.querySelector('.dropdown');
  const dropDownList = document.querySelector('.dropdown__list');

  dropDown.addEventListener('click', (e) => {
    dropDown.classList.toggle('active');
    if (!e.target) dropDown.classList.remove('active');
  });

  adresses.forEach((adress) => {
    dropDownList.innerHTML += `<div id="option" class="dropdown__option">${adress.city}</div>`;
  });

  const option = document.getElementsByClassName('dropdown__option');
  const adressInsert = document.querySelector('.city');

  for (let i = 0; i < option.length; i++) {
    option[i].addEventListener('click', () => {
      adressInsert.innerHTML = `
        <div class="city__inner">
        <div class="city__info">
        <div class="city__text">
        <span>City:</span><span>${adresses[i].city}</span>
        </div>
        <div class="city__text">
        <span>Phone:</span><span>${adresses[i].phone}</span>
        </div>
        <div class="city__text">
        <span>Office adress:</span><span>${adresses[i].adress}</span>
        </div>
        </div>
        <div class="city__button">Call us</div>
        </div>
        `;
    });
  }
}

dropDown()