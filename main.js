// ACTUAL SHIT

// took this and made work with vanilla js
// https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
// MDN for Instersection API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const element = entry.target;
      if (entry.isIntersecting) {
        if (element.classList.contains("text")) {
          return element.classList.add("visible");
        }

        if (element.classList.contains("love")) {
          return element.classList.add("shadow-animation");
        }
      } else {
        if (element.classList.contains("text")) {
          return element.classList.remove("visible");
        }

        if (element.classList.contains("love")) {
          return element.classList.remove("shadow-animation");
        }
      }
    });
  },
  { threshold: 0.4, rootMargin: "16px" }
);

// OBSERVERS
document.querySelectorAll(".text").forEach((ele) => observer.observe(ele));
observer.observe(document.querySelector(".love"));
