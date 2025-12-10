// Solución 1
function maxDepth(s) {
  let depth = 0
  let max = 0

  for (const char of s) {

    if (char === '[') {
      depth++
      max = Math.max(max, depth)
    }

    else if (char === ']') {
      depth--
      if (depth < 0) return -1
    }

  }

  if (depth !== 0) {
    return -1
  }

  return max
}