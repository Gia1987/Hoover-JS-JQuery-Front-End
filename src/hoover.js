
function hoover(x, y) {
  $cell(x, y).addClass('hoover');
  $('#currentX').text(x);
  $('#currentY').text(y);
}
