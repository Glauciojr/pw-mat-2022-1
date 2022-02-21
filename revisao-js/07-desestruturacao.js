// Vetor
let frutas = ['laranja', 'banana', 'maçã']

// Desestruturando o vetor em variáveis avulsas
let [x, y, z] = frutas

console.log('x:', x)
console.log('y:', y)
console.log('z:', z)

// Desestruturação parcial
let [a, b] = frutas
console.log('a:', a)
console.log('b:', b)

let [i, , j] = frutas
console.log('i:', i)
console.log('j:', j)

let [, m, n] = frutas
console.log('m:', m)
console.log('n:', n)

// Desestruturação de objetos
// 1º regra: as variáveis devem ter o mesmo nome das propriedades
// 2ª regra: a ordem não importa

let pessoa = {
    nome: 'Josina Jerônima Junqueira',
    sexo: 'F',
    dataNascimento: '1989-11-08',
    email: 'josina.junqueira@empresa.com.br'
}

// As variáveis podem aparecer em qualquer ordem
let { email, sexo/*, dataNascimento, nome*/ } = pessoa

//console.log('nome:', nome)
console.log('sexo:', sexo)
//console.log('dataNascimento:', dataNascimento)
console.log('email:', email)

// Para fazer desestruturação parcial, basta fornecer apenas os
// nomes das variáveis desejadas