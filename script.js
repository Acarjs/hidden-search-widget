const search = document.querySelector(".search");
const button = document.querySelector(".btn");
const input = document.querySelector(".input");

button.addEventListener("click", function () {
  input.classList.toggle("active");
  button.classList.toggle("active");
  input.focus();
});
