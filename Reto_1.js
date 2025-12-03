function filterGifts(gifts) {
  return gifts.filter(item => !item.includes("#"))
}