function drawGrid(x,y) {
  let $gameBoard = $('#myTable');
  for(let r = (x - 1); r >= 0; r--){
    let $row = $(`<tr id="${r}"></tr>`)
    for(let c = 0; c < y; c++){
      $row.append(`<td class= "${c}"></td>`);
    }
    $gameBoard.append($row)
  }
}

function $cell(x, y) {
  return $(`#${y}`).find(`.${x}`);
}
