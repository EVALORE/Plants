const icon = document.querySelector(".menu");
const cont = icon.querySelectorAll("span");
const nav = document.querySelector(".nav");
const link = nav.querySelectorAll('.nav__link')

icon.addEventListener("click", () => {
  icon.classList.toggle("close");
  nav.classList.toggle("open");
});

link.forEach(e => {
  e.addEventListener("click", () => {
    icon.classList.remove("close");
    nav.classList.remove("open");
  })
})

document.addEventListener("click", (e) => {
  const click = e.composedPath().includes(icon) || e.composedPath().includes(nav);
  if (!click) {
    icon.classList.remove("close");
    nav.classList.remove("open");
  }
});
