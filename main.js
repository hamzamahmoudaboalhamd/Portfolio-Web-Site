// * Dynamic Text Typing Effect

const texts = ["Web Developer", "Mobile Developer", " Software Engineer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("dynamic-text").innerHTML =
    ` <span style="color: var(--Dark-grey);">I'M A </span> ` + letter;
  document.getElementById("dynamic-text").classList.add("fade-in");

  if (letter.length === currentText.length) {
    setTimeout(() => {
      document.getElementById("dynamic-text").classList.remove("fade-in");
      setTimeout(erase, 1000);
    }, 1000);
  } else {
    setTimeout(type, 80);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});

const root = document.documentElement;

function toggleDarkMode() {
  if (root.classList.contains("dark-mode")) {
    root.classList.remove("dark-mode");
  } else {
    root.classList.add("dark-mode");
  }
}

const backToTopBtn = document.querySelector(".button-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// loader hide after page load
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(function () {
      loader.style.display = "none";
    }, 1000);
  }
});

let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".logo");
let nav_links = document.querySelector(".nav-links");

window.addEventListener("scroll", function () {
  navbar.style.backgroundColor = "transparent";
  navbar.style.boxShadow = "none";
  if (window.scrollY === 0) {
    navbar.style.backgroundColor = "transparent ";
    navbar.style.background = "none";
    navbar.style.boxShadow = "none";
    logo.style.color = "var(--Blue-violet) ";

    nav_links.querySelectorAll("a").forEach(function (link) {
      link.style.color = "var(--Blue-violet) !important";
    });
  } else {
    navbar.style.backgroundColor = "var(--Blue-violet) !important";
    navbar.style.boxShadow = "0 2px 12px rgba(79, 70, 229, 0.10) !important";
    logo.style.color = " var(--Bright-white)  !important";
    nav_links.querySelectorAll("a").forEach(function (link) {
      link.style.color = "var(--Light-grey) !important";
    });
  }
});

function erase() {
  letter = currentText.slice(0, --index);
  document.getElementById("dynamic-text").innerHTML =
    ` <span style="color: var(--Dark-grey);">I'M A </span> ` + letter;
  if (letter.length === 0) {
    count++;
    setTimeout(type, 400);
  } else {
    setTimeout(erase, 40);
  }
}

type();

let btn_a = document.getElementById("btn-a");
let bg_3 = document.getElementById("bg-3");

btn_a.onclick = function () {
  if (bg_3.classList.contains("hide")) {
    bg_3.classList.remove("hide");
    btn_a.innerHTML = "-";
    btn_a.style.background = "#1f2937";
  } else {
    bg_3.classList.add("hide");
    btn_a.innerHTML = "+";
    btn_a.style.background = "var(--Blue-violet)";
  }
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    900: { slidesPerView: 3 },
    600: { slidesPerView: 2 },
    0: { slidesPerView: 0 },
  },
});

var swiper = new Swiper(".myswiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 1200,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    900: { slidesPerView: 1 },
    600: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  },
});

window.addEventListener("scroll", function () {
  let impact = document.getElementsByClassName("impact");
  let windowHeight = window.innerHeight;
  for (let i = 0; i < impact.length; i++) {
    let elementTop = impact[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      // 100 = هامش ظهور العنصر
      impact[i].style.opacity = "1";
      impact[i].style.transform = "translateY(0)";
      impact[i].style.transition = "all 0.6s";
    } else {
      impact[i].style.opacity = "0";
      impact[i].style.transform = "translateY(60px)";
    }
  }
});

// Show image on button click for each item
document.querySelectorAll(".show-img-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    let imgitem = this.parentElement.querySelector(".img-item");
    let popup = document.getElementById("img-popup-overlay");
    let popupImg = document.getElementById("img-popup-img");

    popupImg.src = imgitem.src;
    popupImg = popup.style.display = "flex";
  });
});

let popupbg = document.getElementById("img-popup-bg");
let popup = document.getElementById("img-popup-overlay");

popupbg.addEventListener("click", function () {
  popup.style.display = "none";
});

// Animated Counter for .stats .number
let statsStarted = false;

function startStatsCounter() {
  const counters = document.querySelectorAll(".stats .number");
  counters.forEach((counter) => {
    const goal = +counter.getAttribute("data-goal");
    let count = 0;
    const increment = Math.ceil(goal / 100);

    function updateCounter() {
      if (count < goal) {
        count += increment;
        if (count > goal) count = goal;
        counter.textContent = count;
        setTimeout(updateCounter, 20);
      } else {
        counter.textContent = goal;
      }
    }
    updateCounter();
  });
}

window.addEventListener("scroll", function () {
  const statsSection = document.getElementById("stats");
  if (!statsStarted && statsSection) {
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      startStatsCounter();
      statsStarted = true;
    }
  }
});
