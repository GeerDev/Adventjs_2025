// Solución 1
function packGifts(gifts, maxWeight) {
  let sled = 0
  let store = 0
  
  if (gifts.length === 0) return 0
  
  for (let i = 0; i < gifts.length; i++) {  
    if (gifts[i] > maxWeight) return null
    
    if (store + gifts[i] > maxWeight) {
      sled++
      store = gifts[i]
    } else {
      store += gifts[i]
    }
  }
  
  if (store !== 0) {
    sled++
  }
  
  return sled
}