// Solución 1
function minStepsToDeliver(map) {
  const rows = map.length;
  const cols = map[0].length;

  let startRow = -1;
  let startCol = -1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (map[r][c] === 'S') {
        startRow = r;
        startCol = c;
      }
    }
  }

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  const distances = Array.from({ length: rows }, () =>
    Array(cols).fill(Infinity)
  );

  const queue = [[startRow, startCol]];
  distances[startRow][startCol] = 0;

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 && nr < rows &&
        nc >= 0 && nc < cols &&
        map[nr][nc] !== '#' &&
        distances[nr][nc] === Infinity
      ) {
        distances[nr][nc] = distances[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  let totalSteps = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (map[r][c] === 'G') {
        if (distances[r][c] === Infinity) {
          return -1;
        }
        totalSteps += distances[r][c];
      }
    }
  }

  return totalSteps;
}