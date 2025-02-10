document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;

      if (top >= offset && top < offset + height) {
        sec.classList.add("show-animate");
      }
    });
  };

  var hamburger = document.querySelector(".js-navbar-toogle");
  var dropDownList = document.querySelector(".dropdownList");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      dropDownList.classList.toggle("hidden");
    });
  }

  // language dropdown
  var globus = document.querySelector(".js-language-toggle");
  var globusdownList = document.querySelector(".globusdownList");

  if (globus) {
    globus.addEventListener("click", () => {
      globusdownList.classList.toggle("hidden");
    });
  }
});
