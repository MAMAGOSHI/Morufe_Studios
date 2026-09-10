document.addEventListener("DOMContentLoaded", function () {


  const reveals = document.querySelectorAll(".reveal");


  if (!reveals.length) {
    return;
  }


  /*
    If the browser does not support
    IntersectionObserver, simply show
    everything.
  */

  if (!("IntersectionObserver" in window)) {

    reveals.forEach(function (element) {

      element.classList.add("visible");

    });

    return;

  }



  /*
    Watch elements as they enter
    the screen.
  */

  const observer = new IntersectionObserver(

    function (entries, observerInstance) {


      entries.forEach(function (entry) {


        if (entry.isIntersecting) {


          entry.target.classList.add("visible");


          observerInstance.unobserve(
            entry.target
          );


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