function circle(el) {
  $(el)
    .circleProgress({
      fill: {
        color: "orange",
      },
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .text(String(stepValue.toFixed(2)).substring(2) + "%");
    });
}
$(".my-skills").on("click", function (e) {
  var href = $(".my-skills").attr("href");
  var elemenTujuan = $(href);
  console.log(elemenTujuan.offset().top);

  $("html,body").animate({
      scrollTop: elemenTujuan.offset().top,
    },
    800
  );

  circle(".round");
  e.preventDefault();
});