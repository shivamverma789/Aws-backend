const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.classList.toggle("submit");
});
