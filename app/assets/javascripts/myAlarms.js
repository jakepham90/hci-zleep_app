(function() {

  $(document).ready(function(){
    console.log('test!!!');
    hideNewTimes();
  });

}).call(this);


function hideNewTimes () {

  $(".calculated-times").css("visibility", "hidden");

}
