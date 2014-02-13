(function() {

  $(document).ready(function(){
    console.log('test');
  });

  $("select").change(function() {
    var str = "";
    $("select option:selected").each(function() {
      str += $(this).text() + " ";
    });
    console.log('test.trigger ' + str);
  })


}).call(this);



