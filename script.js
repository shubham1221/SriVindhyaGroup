// NAV Animation fade
function navAnimation() {
  // Add fade-in class to the navigation on page load
  document.querySelector(".navigation").classList.add("fade-in");
}

// Project Animation

function projectsAnimation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects",
      // markers: true,
      start: "50% 50%",
      end: "100% 50%",
      scrub: 2,
      pin: true,
    },
  });

  tl.to(
    ".top-project",
    {
      top: "-50%",
    },
    "a"
  );
  tl.to(
    ".bottom-project",
    {
      bottom: "-90%",
    },
    "a"
  );

  tl.to(
    ".top-h",
    {
      top: "80%",
    },
    "a"
  );

  tl.to(
    ".bottom-h",
    {
      bottom: "20%",
    },
    "a"
  );

  tl.to(
    ".content",
    {
      marginTop: "0%",
    },
    "a"
  );
}

// Filterable Project

function filterablePro() {
  const filterableButtons = document.querySelectorAll(".fltr-btn button");
  const filterableCards = document.querySelectorAll(".fltr-cards .card");

  // Define the filterCards Function

  const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Iterate over each filterable card
    filterableCards.forEach((card) => {
      // Add "hide" class to hide the card initialy
      card.classList.add("hide");
      // Check if the card matches the selected filters or "all" is selected
      if (
        card.dataset.name === e.target.dataset.name ||
        e.target.dataset.name == "all"
      ) {
        card.classList.remove("hide");
      }
    });
  };
  // Add Click event listener to each filter button

  filterableButtons.forEach((button) =>
    button.addEventListener("click", filterCards)
  );
}

// Mobile Menu

function mobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  const btnCloseMobile = document.querySelector(".close-mobile");
  const btnShowMobile = document.querySelectorAll(".show-mobile");

  let openMobile = () => {
    mobileMenu.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  let closeMobile = () => {
    mobileMenu.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  for (let i = 0; i < btnShowMobile.length; i++) {
    btnShowMobile[i].addEventListener("click", openMobile);
  }

  btnCloseMobile.addEventListener("click", closeMobile);

  overlay.addEventListener("click", closeMobile);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeMobile();
    }
  });
}

navAnimation();
projectsAnimation();
filterablePro();
mobileMenu();
