// ACTUAL SHIT

// took this and made work with vanilla js
// https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
// MDN for Instersection API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const element = entry.target;
      // console.log(element);
      if (entry.isIntersecting) {
        if (element.classList.contains("text")) {
          return element.classList.add("visible");
        }

        if (element.classList.contains("love")) {
          return element.classList.add("shadow_animation");
        }

        if (element.classList.contains("sliding_box")) {
          return element.classList.add("move_to_center");
        }

        if (element.children[0].classList.contains("sliding_box")) {
          // console.log("works");

          // convert to array from htmlcollection
          return [...element.children].forEach((slidingBox) =>
            slidingBox.classList.add("move_to_center")
          );
        }
      } else {
        // resets animations
        if (element.classList.contains("text")) {
          return element.classList.remove("visible");
        }

        if (element.classList.contains("love")) {
          return element.classList.remove("shadow_animation");
        }

        if (element.classList.contains("sliding_box")) {
          console.log("removed");
          return element.classList.remove("move_to_center");
        }
        if (element.children[0].classList.contains("sliding_box")) {
          // console.log("works");

          // convert to array from htmlcollection
          return [...element.children].forEach((slidingBox) =>
            slidingBox.classList.remove("move_to_center")
          );
        }
      }
    });
  },
  { threshold: 0.4, rootMargin: "16px" }
);

// OBSERVERS
document.querySelectorAll(".text").forEach((ele) => observer.observe(ele));
observer.observe(document.querySelector(".love"));
observer.observe(document.querySelector("#third"));
// document
//   .querySelectorAll(".sliding_box")
//   .forEach((ele) => observer.observe(ele));
