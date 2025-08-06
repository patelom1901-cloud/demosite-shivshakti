// shiv.js

// ===== Slider Drag Scroll =====
let slider = document.querySelector(".slider-container");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

// ===== DOM Ready =====
document.addEventListener("DOMContentLoaded", () => {
  // ===== Mobile Menu Toggle =====
  const nav = document.querySelector("nav ul");
  const navToggle = document.querySelector(".mobile-menu-toggle");

  navToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // ===== Contact Form Submit Alert =====
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting Shiv Shakti Industries!");
      form.reset();
    });
  }

  // ===== Product Modal Feature =====
  const modal = document.getElementById("productModal");
  const modalImage = document.getElementById("modalImage");
  const modalText = document.getElementById("modalText");
  const closeBtn = document.querySelector(".close-btn");

  // Industrial product info (searched from online sources)
  const productInfo = {
    "wire-rope": {
      img: "images/wire-rope.jpg.jpeg",
      text: "Wire ropes are used for lifting, hoisting, rigging, and towing. Common in cranes, elevators, and winches."
    },
    "sling-rope": {
      img: "images/slingrope.jpg.jpg",
      text: "Sling ropes are used to secure and lift heavy industrial loads. Ideal for cranes, hoists, and marine equipment."
    },
    "drum-mix": {
      img: "images/drum mix.jpg.jpg",
      text: "Drum mix plant parts include gear rings, segments, lifters, and support arms. Used in asphalt and road construction plants."
    }
  };

  // Listen for product image clicks
  document.querySelectorAll(".slider span").forEach((item) => {
    item.addEventListener("click", () => {
      const key = item.getAttribute("data-product");
      if (productInfo[key]) {
        modalImage.src = productInfo[key].img;
        modalText.textContent = productInfo[key].text;
        modal.classList.add("show");
      }
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Close modal on background click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});