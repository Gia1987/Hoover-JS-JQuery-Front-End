$(document).ready(function() {

  $("#settingsForm").submit(function(event) {
    event.preventDefault();
    drawGrid( $("#width").val(), $("#height").val() )
    $(this).hide();
  })

  $('#settingHoover').submit(function(event){
    event.preventDefault();
    hoover($("#hooverX").val(), $("#hooverY").val());
    $(this).hide();
  })
});
