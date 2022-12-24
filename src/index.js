// JS Goes here - ES6 supported

import "./css/main.scss";

$(function () {
  var header = $(".navbar");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("main-nav-colored");
    } else {
      header.removeClass("main-nav-colored");
    }
  });
});