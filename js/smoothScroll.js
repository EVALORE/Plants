function smooth() {
  function smoothScroll(targets, duration) {
    let target = document.querySelector(targets);
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset; // scrollY
    let distance = targetPosition - startPosition;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };
    
      
  
    requestAnimationFrame(animation);
  }
  
  const link = document.querySelectorAll(".nav__link");
  const linkMobile = document.querySelectorAll(".nav-mobile__link");
  
  link[0].addEventListener("click", () => {
    smoothScroll("#home", 1000);
  });
  linkMobile[0].addEventListener("click", () => {
    smoothScroll("#home", 1000);
  });
  
  link[1].addEventListener("click", () => {
    smoothScroll("#about-us", 1000);
  });
  linkMobile[1].addEventListener("click", () => {
    smoothScroll("#about-us", 1000);
  });
  
  link[2].addEventListener("click", () => {
    smoothScroll("#service", 1000);
  });
  linkMobile[2].addEventListener("click", () => {
    smoothScroll("#service", 2000);
  });
  
  link[3].addEventListener("click", () => {
    smoothScroll("#price", 1000);
  });
  linkMobile[3].addEventListener("click", () => {
    smoothScroll("#price", 2000);
  });
  
  link[4].addEventListener("click", () => {
    smoothScroll("#contacts", 2000);
  });
  linkMobile[4].addEventListener("click", () => {
    smoothScroll("#contacts", 3000);
  });
}
smooth()