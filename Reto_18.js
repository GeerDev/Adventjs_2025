// Solución 1
function hasFourInARow(board) {
  const rows = board.length;
  const cols = board[0].length;

  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1]
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const value = board[r][c];
      if (value === '.') continue;

      for (const [dr, dc] of directions) {
        let found = true;

        for (let i = 1; i < 4; i++) {
          const nr = r + dr * i;
          const nc = c + dc * i;

          if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || board[nr][nc] !== value) {
            found = false;
            break;
          }
        }

        if (found) return true;
      }
    }
  }

  return false;
}