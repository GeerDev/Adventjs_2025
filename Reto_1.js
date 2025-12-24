// Solución 1
function filterGifts(gifts) {
  return gifts.filter(item => !item.includes("#"))
}