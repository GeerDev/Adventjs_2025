// Solución 1

function canEscape(maze) {
  const rows = maze.length;
  const cols = maze[0].length;
  let startRow = -1;
  let startCol = -1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maze[i][j] === 'S') {
        startRow = i;
        startCol = j;
        break;
      }
    }
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  const visited = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  const queue = [[startRow, startCol]];
  visited[startRow][startCol] = true;

  while (queue.length > 0) {
    const [row, col] = queue.shift();
    if (maze[row][col] === 'E') {
      return true;
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited[newRow][newCol] &&
        maze[newRow][newCol] !== '#'
      ) {
        visited[newRow][newCol] = true;
        queue.push([newRow, newCol]);
      }
    }
  }

  return false;
}