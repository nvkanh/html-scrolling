$(document).ready(function () {
  const SCROLLING_HEIGHT = $(window).height() * 4;

  // Scrolling
  if ($("#scrolling-swiper").length) {
    const items = $("#scrolling-swiper").find(".swiper-slide").length;
    const step = SCROLLING_HEIGHT / (items * 1);
    const section = $("#scrolling-swiper").closest(".section--fullscreen");

    const swiper = new Swiper("#scrolling-swiper", {
      allowTouchMove: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 1500,
      on: {
        init: function () {
          $(window).scroll(function (event) {
            const scroll = $(window).scrollTop();
            const index = Math.round(scroll / step);

            let targetIndex = index;
            if (index >= items) {
              targetIndex = items;
            }

            swiper.slideTo(targetIndex);
          });
        },
        slideChangeTransitionStart: function ({ activeIndex }) {
          if (activeIndex === 0) {
            section.addClass("overlay-top-left");
            section.removeClass("overlay-left-center");
          } else {
            section.addClass("overlay-left-center");
            section.removeClass("overlay-top-left");
          }
        },
      },
    });
  }
});
