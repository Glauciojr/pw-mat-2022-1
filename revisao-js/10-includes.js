let carros = ['Chevette', 'Fusca', 'Opala', '147', 'Belina', 'Del Rey']

let temFusca = carros.includes('Fusca')
let temOpala = carros.includes('Opala')
let temCorcel = carros.includes('Corcel')

console.log({temFusca, temOpala, temCorcel})

/*
    includes() retorna true caso o valor testado exista no vetor
    ou false, caso contrário
*/