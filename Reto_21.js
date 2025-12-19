// Solución 1
function clearGifts(warehouse, drops) {
  const cols = warehouse[0].length

  for (const c of drops) {
    for (let r = warehouse.length - 1; r >= 0; r--) {
      if (warehouse[r][c] === '.') {
        warehouse[r][c] = '#'
        break
      }
    }

    for (let r = warehouse.length - 1; r >= 0; r--) {
      if (warehouse[r].every(cell => cell === '#')) {
        warehouse.splice(r, 1)
        warehouse.unshift(Array(cols).fill('.'))
      }
    }
  }

  return warehouse
}