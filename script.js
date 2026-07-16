const header = document.querySelector("header");

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      const offset = header.offsetHeight + 15;

      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth"
      });
    }
  });
});
