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

  $(window).keydown(function(event) {
    if (event.key === 'ArrowUp') {
      up();
    } else if (event.key === 'ArrowDown') {
      down();
    } else if (event.key === 'ArrowRight') {
      right();
    } else if (event.key === 'ArrowLeft') {
      left();
    }
  })
});
