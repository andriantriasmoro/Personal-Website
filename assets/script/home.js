$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("scroll");
    $("nav").addClass("background");
    $("nav").removeClass("bg-transparent");
    $("nav").removeClass("navbar-dark");
    $("nav").removeClass("navbar-dark");
    $(".navbar-brand").removeClass("text-white");
    $("nav").addClass("navbar-dark");
  } else {
    $("nav").removeClass("scroll");
    $("nav").addClass("bg-transparent");
    $("nav").addClass("navbar-dark");
    $("nav").removeClass("background");

  }
});