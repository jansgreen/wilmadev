/*$(document).ready(function () {
  $("#ex5").toggle("scale", 500);
});*/
$(document).ready(function() {	
  setInterval(function(){ 
    $("#ex5").ready(function(){
    $("#ex5").hide(1000);
  });
 
  $("#ex5").ready(function(){
    $("#ex5").show(1000);
  });
}, 7000);
});




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