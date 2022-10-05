function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

window.onscroll = function () {
  navColorCange();
};

function navColorCange() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("navColor").className = "navChange";
  } else {
    document.getElementById("navColor").className = "";
  }
}
