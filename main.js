// ACTUAL SHIT

const texts = document.querySelectorAll(".text");

// took this and made work with vanilla js
// https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
// MDN for Instersection API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const element = entry.target;
      if (entry.isIntersecting) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  },
  { threshold: 0.4, rootMargin: "16px" }
);

texts.forEach((ele) => observer.observe(ele));
