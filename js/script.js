$(document).ready(function () {
  const SCROLLING_HEIGHT = $(window).height() * 4;

  // Scrolling
  if ($("#scrolling-swiper").length) {
    const items = $("#scrolling-swiper").find(".swiper-slide").length;
    const step = SCROLLING_HEIGHT / (items * 1);

    const swiper = new Swiper("#scrolling-swiper", {
      allowTouchMove: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
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
      },
    });
  }
});
