// Solución 1
function decodeSantaPin(code) {
  const result = code.match(/\[.*?\]/g).map(item => item.slice(1, -1))
  let secret = ""
  
  if (result.length < 4) return null

  result.forEach((block, index) => {
    let value = Number(block[0])

    if (isNaN(Number(value))) {
      secret += secret[index - 1] || '0'
      return
    }
    
    block.split('').forEach(item => {
      switch (item) {
        case '+':
          if (value === 9) {
            value = 0
          } else {
            value++
          }
          
          break;
        case '-':
          if (value === 0) {
            value = 9
          } else {
            value--
          }
          
          break;
      }
    })
    secret += value
  })
  
  return secret
}

// Solución 2
function decodeSantaPin(code) {
	const pin = []

	const blocks = code.replaceAll('[', '').split(']')
	blocks.pop()

	const actions = {
		'+': 1,
		'-': -1,
	}

	for (const block of blocks) {
		const number = block[0]

		if (number === '<') {
			pin.length && pin.push(pin[pin.length - 1])
			continue
		}

		let pinNumber = parseInt(number)
		const operations = block.replaceAll(/\d/g, '')

		for (const operation of operations) {
			pinNumber += actions[operation]
		}

		pin.push((pinNumber + 10) % 10)
	}

	return pin.length < 4 ? null : pin.join('')
}