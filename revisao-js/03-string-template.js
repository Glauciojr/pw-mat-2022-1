let nome = 'Jucicleison'
let idade = 19
let cidade = 'Franca/SP'

console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos e sou de ' + cidade + '.')

// String template é uma string especial, delimitada por acentos graves ("crases") e que
// permite a interpolação de variáveis diretamente dentro dela
console.log(`Meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}.`)

console.log(`Daqui a cinco anos, ${nome.toUpperCase()} terá ${idade + 5} anos.`)

// A interpolação só funciona em strings delimitadas por acentos graves
console.log('Daqui a cinco anos, ${nome.toUpperCase()} terá ${idade + 5} anos.')