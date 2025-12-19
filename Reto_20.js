// Solución 1
function dropGifts(warehouse, drops) {
  const rows = warehouse.length
  for (const c of drops){
      for (let r = rows - 1; r >= 0; r--){
        if (warehouse[r][c] === '.') {
          warehouse[r][c] = '#'
          break;
        }
      }
  }
  return warehouse
}