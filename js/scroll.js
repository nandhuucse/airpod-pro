AOS.init();
window.addEventListener("scroll", () => {
  var header = document.querySelector(".sticky-navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
  if (header.classList.contains("sticky")) {
    header.classList.remove("container");
  } else {
    header.classList.add("container");
  }
});
