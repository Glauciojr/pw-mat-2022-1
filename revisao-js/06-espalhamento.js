let minimo = Math.min(2, -7, 8, 4, 0)
let maximo = Math.max(2, -7, 8, 4, 0)

console.log({minimo, maximo})

let nums = [2, -7, 8, 4, 0]

// A sintaxe de espalhamento é capaz de "desempacotar" um
// vetor em uma lista de valores avulsos
minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log({minimo, maximo})
