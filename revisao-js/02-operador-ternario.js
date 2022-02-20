let media = 4.9, situacao

/*
if(media >= 6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'Reprovado'
}
*/

// Usando o operador ternário
situacao = media >= 6 ? 'APROVADO' : 'Reprovado'

console.log(situacao)

//---------------------------------------------------

let user = 'guest', msg

msg = user === 'admin' ? 'AUTORIZADO' : 'Não autorizado'

console.log(msg)
