let nums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

let nomes = ['Asdrúbal', 'Josenilson', 'Neurivânia', 'Terência']

let dobro = nums.map(x => x * 2)
let maiusculas = nomes.map(x => x.toUpperCase())
let itensLista = nomes.map(x => `<li>${x}</li>`)

console.log({dobro, maiusculas, itensLista})

/*
    map() gera um novo vetor, do mesmo tamanho do vetor original,
    em que cada elemento sofreu uma transformação determinada
    pela função passada como parâmetro
*/