const header = document.querySelector("header");

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      const topBar = document.querySelector(".top-booking");
const offset = header.offsetHeight + (topBar ? topBar.offsetHeight : 0) + 15;

      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth"
      });
    }
  });
});
