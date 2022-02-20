// Criando um objeto

// Criando as propriedades primeiramente como variáveis avulsas
let username = 'jucicleison'
let fullName = 'Jucicleison da Silva Santos'
let group = 'alunos'
let password = '12345@6'

// Criando o objeto a partir das variáveis
// Observe que os nomes das propriedades são IGUAIS aos nomes
// das variáveis correspondentes
/*
let user = {
    username: username,
    fullName: fullName,
    group: group,
    password: password
}
*/

// Quando o objeto a ser criado tiver propriedades de nome idêntico
// às variáveis de onde virão os respectivos valores, pode-se usar
// as chamadas PROPRIEDADES ABREVIADAS.
let user = {
    username,
    fullName,
    group,
    password,
    lastLogin: '2022-02-01 13:54:12' // Propriedade NÃO abreviada
}

/*
let user = {
    username: 'jucicleison',
    name: 'Jucicleison da Silva Santos',
    group: 'alunos',
    password: '12345@6'
}
*/

// Exibindo o objeto
console.log(user)

// Propriedades abreviadas são muito utilizadas para depuração, quando precisamos
// saber, além do valor da variável, também o seu nome
console.log(username, group)

// Transformando as variáveis avulsas em um objeto para que o nome
// das variáveis também aparecem na depuração
console.log({username, group})