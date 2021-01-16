/*$(document).ready(function () {
  $("#ex5").toggle("scale", 500);
});*/

$("#Modulo-Text").hover(function () {
  $("#Modulo-Text")
    .css({ 'transform': " rotateY(" + 360 + "deg)" }, 3000);
    $("#h5-text").hide(2000);
    $("#data-hover").show(2000);

}, 3000);

/*

  setInterval(function pulse() {
  $("#ex5").animate(
    { width: 300, height: 30, opacity: 0.5 },
    700,
    function () {
      $("#ex5").animate(
        { width: 350, height: 45, opacity: 1 },
        700,
        function () {
          pulse();
        }
      );
    },
  );
}, 7000);


*/
