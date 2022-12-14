// Full Screen Nav
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
// NavBar Changes Collors When Yo Scroll About 50px
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

// ----------------------------------Slider---------------------------------//
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true; // Auto scroll
const intervalTime = 5500;
let slideInterval;

// Java That Checks The Current slide And Replaces It With The Next
const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};
// Java That Checks The Current slide And Replaces It With The Revious

const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};
// Auto slide   // Run Next Slide
if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Button events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});
