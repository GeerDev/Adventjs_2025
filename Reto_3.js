// Solución 1
function drawGift(size, symbol) {
  let string = ""
  if (size < 2) return ""
  for(let i = 0; i < size; i++) {
    if (i === 0 || i === size - 1) {
      string += `${symbol.repeat(size)}${i === size - 1 ? '' : '\n'}`
    }
    else {
      string += `${symbol}${" ".repeat(size - 2)}${symbol}\n`
    }
  }
  return string
}

// Solución 2
function drawGift(size, symbol) {
	if (size < 2) return ''

	let wrapper = `${symbol.repeat(size)}\n`

	for (let i = 2; i < size; i++) {
		wrapper += `${symbol}${' '.repeat(size - 2)}${symbol}\n`
	}

	wrapper += `${symbol.repeat(size)}`

	return wrapper
}