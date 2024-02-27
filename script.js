// NAV Animation fade
function navAnimation() {
  document.addEventListener("DOMContentLoaded", function (event) {
    // Add fade-in class to the navigation on page load
    document.querySelector("nav").classList.add("fade-in");
  });
}

navAnimation();

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
    bottom: "-50%",
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
    bottom: "80%",
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
