let anchors = document.querySelectorAll(".sidebar a");
let btnClose = document.querySelector("#btn-close");
let themeToggler = document.querySelector(".theme-toggler");
let themeTogglerBtns = document.querySelectorAll(".theme-toggler span");
let menuBtn = document.querySelector("#menu-btn");
let sidebar = document.querySelector("aside");

const changeActiveItems = (items) => {
  items.forEach((item) => {
    item.classList.remove("active");
  });
};

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function () {
    changeActiveItems(anchors);
    this.classList.add("active");
  });
});

themeTogglerBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    changeActiveItems(themeTogglerBtns);
    btn.classList.add("active");
    document.body.classList.toggle("dark-theme-toggle");
  });
});

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

btnClose.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
