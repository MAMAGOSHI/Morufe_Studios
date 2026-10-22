
document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  if (!reveals.length) {
    return;
  }

  // Show all content if scroll observation is unsupported.
  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (element) {
      element.classList.add("visible");
    });

    return;
  }

  // Reveal elements as they enter the viewport.
  const observer = new IntersectionObserver(
    function (entries, observerInstance) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  reveals.forEach(function (element) {
    observer.observe(element);
  });
});
