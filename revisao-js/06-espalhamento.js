let minimo = Math.min(2, -7, 8, 4, 0)
let maximo = Math.max(2, -7, 8, 4, 0)

console.log({minimo, maximo})

let nums = [2, -7, 8, 4, 0]

// A sintaxe de espalhamento é capaz de "desempacotar" um
// vetor em uma lista de valores avulsos
minimo = Math.min(...nums)
maximo = Math.max(...nums)

console.log({minimo, maximo})

console.log('Vetor:', nums)
console.log('Soltos:', ...nums)

// Espalhamento com objetos
let carro1 = { marca: 'Fiat', modelo: '147', cor: 'azul', ano: 1981 }

//let carro2 = carro1 // Copiando o carro para uma nova variável

// Usando espalhamento para tirar uma cópia REAL do objeto
let carro2 = {...carro1}

carro2.marca = 'Chevrolet'
carro2.modelo = 'Chevette'
carro2.cor = 'marrom'

console.log({carro1, carro2})

// Criando funções com um número arbitrário de parâmetros
function somaTudo(...nums) {    // Recebe os parâmetros como espalhamento
    let soma = 0
    for(let n of nums) soma += n
    return soma
}

console.log(somaTudo(1, 2, 3, 4))
console.log(somaTudo(1, 2))
console.log(somaTudo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Função em que o primeiro parâmetro é fixo e os demais são
// arbitrários. Nesse caso, o parâmetro de espalhamento também é
// chamado de PARÂMETRO DE RESTO.
function calcular(operador, ...operandos) {
    switch(operador) {
        case '+':
            let soma = 0
            for(let o of operandos) soma += o
            return soma
        case '*':
            let produto = 1
            for(let o of operandos) produto *= o
            return produto        
    }
}

console.log(calcular('+', 1, 2, 3, 4))
console.log(calcular('*', 1, 2, 3, 4))

// Usando espalhamento para concatenação de vetores
let hortalicas = ['alface', 'beterraba', 'cenoura', 'chuchu']
let frutas = ['abacaxi', 'laranja', 'maçã', 'uva']
let hortifruti = [...hortalicas, ...frutas]

console.log({hortalicas, frutas, hortifruti})