// Solución 1
function drawTree(height, ornament, frequency) {
  let tree = ""
  let count = 0
  for (let i = 1; i <= height; i++){
    tree += `${' '.repeat(height - i)}${'*'.repeat(i * 2  - 1)}\n`
  }
  tree += `${' '.repeat(height - 1)}#`
  
  let treeArr = tree.split('');
  
  for (let j = 0; j < treeArr.length; j++) {
    if (treeArr[j] === '*') {
      count++
      if (count === frequency) {
        treeArr[j] = ornament
        count = 0
      }
    }
  }
  
  return treeArr.join('')
}

// Solución 2
function drawTree(height, ornament, frequency) {
  let tree = "";
  let ornamentCount = 0;
  for (let i = 1; i <= height; i++) {
    tree += " ".repeat(height - i);
    for (let j = 0; j < 2 * (i - 1) + 1; j++) {
      ornamentCount++;
      if (ornamentCount === frequency) {
        tree += ornament;
        ornamentCount = 0;
      } else {
        tree += "*";
      }
    }
    tree += "\n";
  }
  tree += " ".repeat(height - 1) + "#";
  return tree;
}