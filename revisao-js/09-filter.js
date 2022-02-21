const numeros = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

let negativos = numeros.filter(n => n < 0)
let divs5 = numeros.filter(x => x % 5 === 0)
let comecamComM = frutas.filter(f => f.charAt(0) === 'm')
let comecaComJ = frutas.filter(a => a.charAt(0) == 'j')
let divs7 = numeros.filter(i => i % 7 == 0 && i !== 0)

console.log({negativos, divs5, comecamComM, comecaComJ, divs7})

/*
    filter() retorna TODOS os valores de um vetor que correspondem
    ao critério especificado na função passada como parâmetro
*/