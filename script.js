
/* ==========================================
   JOEZY-FLEX PORTFOLIO
   JavaScript Functionality
========================================== */

// 1. SELECT WEBSITE ELEMENTS

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const backToTop = document.getElementById("back-to-top");
const currentYear = document.getElementById("current-year");


// 2. MOBILE NAVIGATION MENU

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  // Close menu when a navigation link is clicked

  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


  // Close menu when Escape is pressed

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}


// 3. AUTOMATIC COPYRIGHT YEAR

if (currentYear) {

  currentYear.textContent = new Date().getFullYear();

}


// 4. BACK TO TOP BUTTON

if (backToTop) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

      backToTop.classList.add("show");

    } else {

      backToTop.classList.remove("show");

    }

  });


  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


// 5. SCROLL REVEAL ANIMATIONS

const animatedElements = document.querySelectorAll(
  "[data-animate]"
);


if ("IntersectionObserver" in window) {

  document.body.classList.add("js-ready");

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          observerInstance.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -30px 0px"
    }
  );


  animatedElements.forEach(element => {

    observer.observe(element);

  });

} else {

  // Show everything if the browser
  // does not support IntersectionObserver.

  animatedElements.forEach(element => {

    element.classList.add("is-visible");

  });

}


// 6. WEBSITE READY MESSAGE

console.log("Welcome to Joezy-flex!");
console.log("LEARN. BUILD. TEACH.");
