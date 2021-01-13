$(document).ready(function(){
  setInterval(function(){
    var div = $("#ex5");
    div.animate({height: '300px', width: '300px'}, "slow");
    div.animate({height: '100px', width: '100px'}, "slow");
    div.animate({height: '300px', width: '300px'}, "slow");
    div.animate({height: '100px', width: '100px'}, "slow");
  }, 5000);
});