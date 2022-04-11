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
  document.getElementById("navbar").classList.add("bg-white");
  document.getElementById("navbar").classList.add("nav-shadow");
  document.querySelector('.nav-login').classList.add('color-blue');
}

function changeNavbarTransparent() {
  document.getElementById("navbar").classList.remove("bg-white");
  document.getElementById("navbar").classList.remove("nav-shadow");
  document.getElementById("navbar").classList.add("bg-transparent");
  document.querySelector('.nav-login').classList.remove('color-blue');
}
