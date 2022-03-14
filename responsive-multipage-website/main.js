// CHANGE NAVBAR STYLES ON SCROLL

window.addEventListener("scroll", () => {
  document
    .getElementById("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// SHOW/HIDE FAQ ANSWER

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // CHANGE ICON

    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "bx bx-plus") {
      icon.className = "bx bx-minus";
    } else {
      icon.className == "bx bx-plus";
    }
  });
});

// **** SHOW NAV MENU ******

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// ******* CLOSE NAV MENU *******

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);
