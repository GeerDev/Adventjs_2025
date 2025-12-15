// Solución 1
function drawTable(data, sortBy) {
  let table = ''
  let divider = '+'
  const arrayLength = []
  const keys = Object.keys(data[0])
  
  data.sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];

    if (typeof valA === 'number' && typeof valB === 'number') {
      return valA - valB;
    }

    return valA.toString().localeCompare(valB.toString());
  });

  for (let j = 0; j < keys.length; j++) {
    const maxLength = data.reduce((max, obj) => {
      return Math.max(max, obj[keys[j]].toString().length);
    }, 0);
    arrayLength.push(maxLength)
  }
  
  arrayLength.forEach(len => divider += '-'.repeat(len + 2) + '+');
  
  table += `${divider}\n`
  
  table += '|';
  keys.forEach((_, idx) => {
    const header = String.fromCharCode(65 + idx);
    const padding = ' '.repeat(arrayLength[idx] - header.length);
    table += ` ${header}${padding} |`;
  });
  table += '\n';
  
  table += `${divider}\n`
  
  data.forEach(row => {
    table += '|';
    keys.forEach((key, idx) => {
      const cell = row[key].toString();
      const padding = ' '.repeat(arrayLength[idx] - cell.length);
      table += ` ${cell}${padding} |`;
    });
    table += '\n';
  });
  
  table += `${divider}`
  
  return table
}
// Solución 2
function drawTable(data, sortBy) {
  const isValueNumeric = typeof data[0][sortBy] === "number";
  const sortedItems = data.toSorted((item1, item2) =>
    isValueNumeric
      ? item1[sortBy] - item2[sortBy]
      : item1[sortBy].localeCompare(item2[sortBy])
  );

  let table = "";
  let currentColumnHeaderASCII = 65;
  const columnNames = Object.keys(sortedItems[0]);
  const columnLengths = columnNames.map((key) =>
    Math.max(...sortedItems.map((item) => item[key].toString().length))
  );

  const sectionSeparator = columnLengths.reduce(
    (curr, length) => `${curr}-${"-".repeat(length)}-+`,
    "+"
  );

  table += sectionSeparator + "\n";

  table +=
    columnLengths.reduce((curr, length, index) => {
      const header = String.fromCodePoint(currentColumnHeaderASCII + index);
      return `${curr} ${header.padEnd(length)} |`;
    }, "|") + "\n";
  table += sectionSeparator + "\n";

  table += sortedItems.reduce((curr, item) => {
    const row = Object.values(item).reduce(
      (rowValue, value, index) =>
        `${rowValue} ${value.toString().padEnd(columnLengths[index], " ")} |`,
      "|"
    );
    return `${curr}${row}\n`;
  }, "");

  table += sectionSeparator;
  
  return table;
}
