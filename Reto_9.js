// Solución 1
function moveReno(board, moves) {
  const matrix = board.trim().split('\n').map(line => line.split(''));
  
  let initialPosition
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row].includes('@')) {
      const column = matrix[row].indexOf('@')
      initialPosition = [row, column]
    }
  }
  
  let endPosition = 'fail'
  let savePosition = [...initialPosition]
  let isSuccess = false
  for (const move of moves.split('')) {
    switch (move) {
      case 'L':
        savePosition[1]--
        break;

      case 'R':
        savePosition[1]++
        break;

      case 'U':
        savePosition[0]--
        break;
      
      case 'D':
        savePosition[0]++ 
        break;

      default:
        break;
    }
    
    if (!matrix[savePosition[0]]?.[savePosition[1]] || matrix[savePosition[0]][savePosition[1]] === '#') {
      endPosition = 'crash'
      break;
    } 
    
    if (matrix[savePosition[0]][savePosition[1]] === '*') {
      isSuccess = true
    } 
  }
  
  return isSuccess ? 'success' : endPosition;
}

// Solución 2
function moveReno(board, moves) {
  let boardArray = board.split("\n").filter((line) => line.trim() != "")
  const allowedMoves = {
    R: { row: 0, col: 1 },
    L: { row: 0, col: -1 },
    U: { row: -1, col: 0 },
    D: { row: 1, col: 0 }
  }

  function outOfBounds(r, c) {
    return !(
      r >= 0 &&
      r < boardArray.length &&
      c >= 0 &&
      c < boardArray[0].length
    )
  }

  function findReno() {
    for (let row = 0; row < boardArray.length; row++) {
      for (let col = 0; col < boardArray[row].length; col++) {
        if (boardArray[row][col] === "@") {
          return { row, col }; 
        }
      }
    }
    return null; 
  }

  const posReno = findReno();
  if (!posReno) return "fail";

  for (const char of moves) {
    const moveData = allowedMoves[char]

    posReno.row += moveData.row
    posReno.col += moveData.col

    if (outOfBounds(posReno.row, posReno.col)) return "crash"

    const nextCell = boardArray[posReno.row][posReno.col]

    if (nextCell === "*") return "success"
    if (nextCell === "#") return "crash"
  }

  return "fail"
}

// Solución 3
function moveReno(board, moves) {
  const ACTIONS = {
    U: c => c.y--,
    D: c => c.y++,
    L: c => c.x--,
    R: c => c.x++
  }

  const rows = board.trim().split('\n')
  const y = rows.findIndex(r => r.includes('@'))
  const coords = {
    x: rows[y].indexOf('@'),
    y
  }

  for (let i = 0; i < moves.length; i++) {
    ACTIONS[moves[i]](coords)
    const collected = rows[coords.y]?.[coords.x];

    if (collected === '*') {
      return 'success'
    }

    if (!collected || collected === '#') {
      return 'crash'
    }
  }

  return 'fail';
}