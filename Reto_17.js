// Solución 1
function hasFourLights(board) {
  const rows = board.length
  const cols = board[0].length

  if (rows < 4 && cols < 4) return false

  for (let r = 0; r < rows; r++) {
    let countH = 1;
    for (let c = 1; c < cols; c++) {
      if ((board[r][c] === 'R' || board[r][c] === 'G') &&
          board[r][c] === board[r][c - 1]) {
        countH++
        if (countH === 4) return true
      } else {
        countH = 1
      }
    }
  }

  for (let c = 0; c < cols; c++) {
    let countV = 1;
    for (let r = 1; r < rows; r++) {
      if ((board[r][c] === 'R' || board[r][c] === 'G') &&
          board[r][c] === board[r - 1][c]) {
        countV++
        if (countV === 4) return true
      } else {
        countV = 1
      }
    }
  }

  return false
}