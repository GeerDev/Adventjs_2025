// Solución 1
function elfBattle(elf1, elf2) {
  let elf1Life = 3
  let elf2Life = 3
  const ACTIONS= {
    AA: { damageElf1: 1, damageElf2: 1 },
    AF: { damageElf1: 1, damageElf2: 2 },
    BF: { damageElf1: 0, damageElf2: 2 },
    FA: { damageElf1: 2, damageElf2: 1 },
    FB: { damageElf1: 2, damageElf2: 0 },
    FF: { damageElf1: 2, damageElf2: 2 },
  }
  
  for (let i = 0; i < elf1.length; i++) {
    const battle = elf1[i] + elf2[i]
    if (ACTIONS[battle]) {
      const { damageElf1, damageElf2 } = ACTIONS[battle]
      elf2Life -= damageElf1
      elf1Life -= damageElf2
    }

    if (elf1Life === 0 && elf2Life === 0) return 0
    if (elf1Life <= 0) return 2
    if (elf2Life <= 0) return 1
  }
  
  if (elf1Life > elf2Life) return 1
  if (elf1Life < elf2Life) return 2
  return 0
}