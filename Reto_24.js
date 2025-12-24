// Solución 1
function isTreesSynchronized(tree1, tree2) {
  function areMirror(node1, node2) {
    if (!node1 && !node2) return true
    if (!node1 || !node2) return false

    return (
      node1.value === node2.value &&
      areMirror(node1.left, node2.right) &&
      areMirror(node1.right, node2.left)
    )
  }

  const synchronized = areMirror(tree1, tree2)
  return [synchronized, tree1?.value]
}