// Solución 1
function manufactureGifts(giftsToProduce) {
  const almacen = []
  const result = giftsToProduce.filter(a => Number(a.quantity) && a.quantity >=1)
  result.forEach(a => {
    for (let i = 0; i < a.quantity; i++) {
      almacen.push(a.toy)
    } 
  })
  return almacen
}

// Solución 2
function manufactureGifts(giftsToProduce) {
  return giftsToProduce
    .filter(g => g.quantity >= 0)
    .flatMap(g => Array.from({ length: g.quantity }, () => g.toy));
}

// Solución 3
function manufactureGifts(giftsToProduce) {
	const giftsArr = []

	for (const gift of giftsToProduce) {
		if (typeof gift.quantity !== 'number' || gift.quantity < 1) continue
		giftsArr.push(...Array.from({ length: gift.quantity }, () => gift.toy))
	}

	return giftsArr
}