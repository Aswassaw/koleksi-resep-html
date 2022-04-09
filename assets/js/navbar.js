window.onscroll = () => {
  scrollFunction();
};

// Scroll Handler
function scrollFunction() {
  let navbarTogglerStatus = document
    .querySelector(".navbar-toggler")
    .classList.contains("collapsed");

  if (navbarTogglerStatus) {
    if (document.documentElement.scrollTop > 100) {
      changeNavbarBg();
    } else {
      changeNavbarTransparent();
    }
  }
}

// Click Handler
document.querySelector(".navbar-toggler").addEventListener("click", () => {
  let navbarTogglerStatus = document
    .querySelector(".navbar-toggler")
    .classList.contains("collapsed");

  if (navbarTogglerStatus) {
    if (document.documentElement.scrollTop > 100) {
    } else {
      changeNavbarTransparent();
    }
  } else {
    changeNavbarBg();
  }
});

function changeNavbarBg() {
  document.getElementById("navbar").classList.remove("bg-transparent");
  document.getElementById("navbar").classList.add("back-primary");

  document.querySelector(".navbar-brand span").classList.add("text-dark");
  document.querySelectorAll(".nav-link").forEach((el) => {
    el.classList.remove("color-blue");
    el.classList.add("text-dark");
  });
}

function changeNavbarTransparent() {
  document.getElementById("navbar").classList.remove("back-primary");
  document.getElementById("navbar").classList.add("bg-transparent");
  
  document.querySelector(".navbar-brand span").classList.remove("text-dark");
  document.querySelectorAll(".nav-link").forEach((el) => {
    el.classList.remove("text-dark");
    el.classList.add("color-blue");
  });
}
