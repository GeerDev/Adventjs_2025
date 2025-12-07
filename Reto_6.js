// Solución 1
function matchGloves(gloves) {
  const store = []
    
  const colors = gloves.map(g => g.color)

  const uniqueColors = colors.filter((color, index) => {
    return colors.indexOf(color) === index
  })
  
  uniqueColors.forEach(color => {
      const filteredByColor = gloves.filter(glove => glove.color === color)
      const L = filteredByColor.filter(color => color.hand === 'L')
      const R = filteredByColor.filter(color => color.hand === 'R')
      const minimum = Math.min(L.length, R.length)
      for (let i = 0; i < minimum; i++){
        store.push(color)
      }    
  })
  
  return store
}

// Solución 2
function matchGloves(gloves) {
  const counter = {};

  for (const { hand, color } of gloves) {
    if (!counter[color]) counter[color] = { L: 0, R: 0 };
    counter[color][hand]++;
  }

  let result = [];
  for (const color in counter) {
    const pairs = Math.min(counter[color].L, counter[color].R);
    result = result.concat(Array(pairs).fill(color));
  }

  return result;
}