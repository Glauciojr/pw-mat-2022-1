const numeros = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

let primeiroNegativo = numeros.find(n => n < 0)
let primeiroDiv5 = numeros.find(x => x % 5 === 0)
let comecaComM = frutas.find(f => f.charAt(0) === 'm')
let primeiroDiv7 = numeros.find(i => i % 7 == 0 && i !== 0)

console.log({primeiroNegativo, primeiroDiv5, comecaComM, primeiroDiv7})

/*
    find() retorna o primeiro valor existente no vetor
    que corresponda ao critério especificado na função
    passada como parâmetro
*/