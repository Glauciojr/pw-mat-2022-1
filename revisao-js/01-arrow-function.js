/*
    Função tradicional com 1 argumento e
    1 linha de corpo contendo return
*/
function quadrado(n) {
    return n * n
}

console.log(quadrado(7))

/* Arrow function equivalente com 1 argumento */
const quadrado2 = n => n * n

console.log(quadrado2(7))

/*
    Função tradicional com 2 argumentos e uma
    linha de corpo com return
*/
function soma(a, b) {
    return a + b
}

console.log(soma(10, 20))

/* Arrow function equivalente com 2 argumentos:
   os parênteses em volta dos argumentos são OBRIGATÓRIOS
*/
const soma2 = (a, b) => a + b

console.log(soma2(10, 20))

/*
    Função tradicional sem argumentos e uma única
    linha de corpo com return
*/
function msgErro()  {
    return 'ERRO FATAL. Entre em contato com o suporte.'
}

console.log(msgErro())

/*
    Arrow function equivalente. Os parênteses são OBRIGATÓRIOS
    quando não há argumento.
*/
const msgErro2 = () => 'ERRO FATAL. Entre em contato com o suporte.'

console.log(msgErro2())

/* 
    Função tradicional com um argumento e mais de uma linha
    de corpo
*/
function fatorial(n) {
    let fat = 1
    for(let i = n; i > 1; i--) fat *= i
    return fat
}

console.log(fatorial(5))

/*
    Arrow function equivalente. Não há economia na codificação do
    corpo da função
*/
const fatorial2 = n => {
    let fat = 1
    for(let i = n; i > 1; i--) fat *= i
    return fat
}

console.log(fatorial2(5))