// Solución 1
function runFactory(factory) {
  const movements = {
    '>': [0, 1],
    '<': [0, -1],
    '^': [-1, 0],
    'v': [1, 0],
    '.': [0, 0]
  }
  let nextPosition = factory[0][0]
  let actual = [0,0]
  let history = [[0,0]]
  const totalMovements = factory.join('').length + 1;
  for (let i = 0; i < totalMovements; i++) {
    if (!nextPosition) return 'broken'
    if (nextPosition === '.') return 'completed'
    
    actual = [actual[0] + movements[nextPosition][0], actual[1] + movements[nextPosition][1]]
    const exists = history.some(item => item[0] === actual[0] && item[1] === actual[1]);
    if (exists) return 'loop'
    
    nextPosition = factory[actual[0]]?.[actual[1]]
    history.push(actual)
  }
}

// Solución 2
function runFactory(factory) {
  const moves = {
    '>': [0, 1],
    '<': [0, -1],
    '^': [-1, 0],
    'v': [1, 0],
    '.': [0, 0]
  };

  let pos = [0, 0];
  const visited = new Set(["0,0"]);

  while (true) {
    const char = factory[pos[0]]?.[pos[1]];

    if (char === undefined) return "broken";
    if (char === ".") return "completed";

    const [dy, dx] = moves[char];
    const next = [pos[0] + dy, pos[1] + dx];
    const key = `${next[0]},${next[1]}`;

    if (visited.has(key)) return "loop";

    visited.add(key);
    pos = next;
  }
}