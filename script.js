// NAV Animation fade
function navAnimation() {
  document.addEventListener("DOMContentLoaded", function (event) {
    // Add fade-in class to the navigation on page load
    document.querySelector("nav").classList.add("fade-in");
  });
}

navAnimation();
