function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options);
  });
}

function addObserver(el, options) {
  if (!("IntersectionObserver" in window)) {
    if (options.cb) {
      options.cb(el);
    } else {
      entry.target.classList.add("active");
    }
    return;
  }
  let observer = new IntersectionObserver((entries, observer) => {
    //this takes a callback function which receives two arguments: the elemts list and the observer instance
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el);
        } else {
          entry.target.classList.add("active");
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(el);
}

scrollTrigger(".scroll-reveal", {
  rootMargin: "-100px",
});

$("#scrollDown").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#skillsPage").offset().top,
    },
    "slow"
  );
});

$("#contact-btn").click(function () {
  $("#contact-wrap").css({ display: "block" }).addClass("fadeIn");
});
$("#exit").click(function () {
  $("#contact-wrap").fadeOut(300).removeClass("fadeIn");
});
