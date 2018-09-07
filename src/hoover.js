
function hoover(x, y) {
  $cell(x, y).addClass('hoover');
  $('#currentX').text(x);
  $('#currentY').text(y);
}

function cleaning() {
  $('.hoover.dirty').removeClass('dirty');
}

function up() {
  let gridHeight = $('#myTable').find('tr').length;
  let $currentX = $('#currentX');
  let $currentY =  $('#currentY');
  if(parseInt($currentY.text()) < gridHeight - 1){
    let nextY = parseInt($currentY.text()) + 1;
    $cell($currentX.text(), $currentY.text()).removeClass('hoover');
    $cell($currentX.text(), nextY).addClass('hoover');
    $currentY.text(nextY);
  }
}

function down() {
  let gridHeight = $('#myTable').find('tr').length;
  let $currentX = $('#currentX');
  let $currentY =  $('#currentY');
  if(parseInt($currentY.text()) > 0){
    let nextY = parseInt($currentY.text()) - 1;
    $cell($currentX.text(), $currentY.text()).removeClass('hoover');
    $cell($currentX.text(), nextY).addClass('hoover');
    $currentY.text(nextY);
  }
}

function left() {
  let gridWidth = $('#myTable').first('tr').find('td').length;
  let $currentX = $('#currentX');
  let $currentY =  $('#currentY');
  if(parseInt($currentX.text()) > 0){
    let nextX = parseInt($currentX.text()) - 1;
    $cell($currentX.text(), $currentY.text()).removeClass('hoover');
    $cell(nextX, $currentY.text()).addClass('hoover');
    $currentX.text(nextX);
  }
}

function right() {
  let gridWidth = $('#myTable').find('tr#0').find('td').length;
  let $currentX = $('#currentX');
  let $currentY =  $('#currentY');
  if(parseInt($currentX.text()) < gridWidth - 1){
    let nextX = parseInt($currentX.text()) + 1;
    $cell($currentX.text(), $currentY.text()).removeClass('hoover');
    $cell(nextX, $currentY.text()).addClass('hoover');
    $currentX.text(nextX);
  }
}
