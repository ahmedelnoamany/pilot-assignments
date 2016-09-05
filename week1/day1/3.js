var console = require('./lib/consolelog.js');

module.exports = function chessboard(size) {
  this.size = size;
  var board = '';

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if ((i + j) % 2 === 0)
        board += '#';
      else
        board += ' ';
    }
  if(i === size-1)
    break;
  board += '\n';
}
console.log(board);
}
