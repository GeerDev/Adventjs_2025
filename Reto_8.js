// Solución 1
function findUniqueToy(toy) {
  const letters = toy.toLowerCase().split('');
  const counts = {};

  letters.forEach(letter => {
    counts[letter] = (counts[letter] || 0) + 1;
  });

  for (let letter of letters) {
    if (counts[letter] === 1) {
      return toy[letters.indexOf(letter)];
    }
  }

  return '';
}

// Solución 2
function findUniqueToy(toy) {
    const toyLower = toy.toLowerCase();

    for (let i = 0; i < toy.length; i++) {
        const letter = toyLower[i];
        const firstIndex = toyLower.indexOf(letter);
        const lastIndex = toyLower.lastIndexOf(letter);
        if (firstIndex === lastIndex) {
            return toy[i];
        }
    }

    return '';
}