// Solución 1
function findUnsafeGifts(warehouse) {
  let almacen = 0
  warehouse.forEach((present, index) => {
    for (let i = 0; i < present.length; i++) {
      if (present[i] === '*') {
        almacen++
        if (present[i - 1] === '#' || present[i + 1] === '#' || warehouse[index + 1]?.[i] === '#' || warehouse[index - 1]?.[i] === '#') {
          almacen--
        }
      }
    }
  })
  return almacen
}

// Solución 2
function findUnsafeGifts(warehouse) {
  const dirs = [[1,0], [-1,0], [0,1], [0,-1]]
  let safe = 0

  for (let r = 0; r < warehouse.length; r++) {
    for (let c = 0; c < warehouse[r].length; c++) {

      if (warehouse[r][c] !== '*') continue

      const isSafe = dirs.every(([dr, dc]) =>
        warehouse[r + dr]?.[c + dc] !== '#'
      )

      if (isSafe) safe++
    }
  }

  return safe
}