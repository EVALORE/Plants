function accordeon() {
  const item = document.querySelectorAll(".accordeon__option");

  item.forEach((event) => {
    event.addEventListener("click", (e) => {
      if (e.target.classList.contains("accordeon__more")) return;
      event.classList.contains("active")
        ? event.classList.toggle("active", false)
        : item.forEach((e) => {
            e.classList.toggle("active", false);
            event.classList.toggle("active", true);
          });
    });
  });
}
accordeon();
