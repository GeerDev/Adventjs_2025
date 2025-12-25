// Solución 1
function execute(code) {
  let v = 0, i = 0

  const actions = {
    '+': () => v++,
    '-': () => v--,
    '[': () => v === 0 && (i = code.indexOf(']', i)),
    ']': () => v !== 0 && (i = code.lastIndexOf('[', i)),
    '{': () => v === 0 && (i = code.indexOf('}', i))
  }

  while (i < code.length) {
    actions[code[i]]?.()
    i++
  }

  return v
}