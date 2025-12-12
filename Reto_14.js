// Solución 1
function findGiftPath(workshop, gift) {
  const stack = [{ valor: workshop, ruta: [] }]

  while (stack.length > 0) {
    const { valor, ruta } = stack.pop()

    for (const [key, hijo] of Object.entries(valor)) {
      const nuevaRuta = [...ruta, key]

      if (typeof hijo === "object" && hijo !== null) {
        stack.push({ valor: hijo, ruta: nuevaRuta })
      } else if (hijo === gift) {
        return nuevaRuta
      }
    }
  }

  return []
}