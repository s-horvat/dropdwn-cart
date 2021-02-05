const navToggle = document.querySelector(".btn-toggle");
const dropdown = document.querySelector(".hide-dropdown");
const border = document.querySelector(".border");

navToggle.addEventListener("click", function () {
  //   console.log(dropdown.classList);
  //   if (dropdown.classList.contains("hide-dropdown")) {
  //     dropdown.classList.remove("hide-dropdown");
  //   } else {
  //     dropdown.classList.add("hide-dropdown");
  //   }
  dropdown.classList.toggle("hide-dropdown");
});
navToggle.addEventListener("click", function () {
  console.log(border.classList);
  border.classList.toggle("border");
});
