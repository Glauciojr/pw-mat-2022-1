/*
    Função que calcula a área de diferentes formas geométricas
*/

// Transformando o terceiro parâmetro em predefinido
function calcularArea(base, altura, forma = 'R') {
    switch(forma) {
        case 'R':   // Retângulo
            return base * altura
        case 'T':   // Triângulo
            return base * altura / 2
        case 'E':   // Elipse
            return (base / 2) * (altura / 2) * Math.PI
        default:    // Forma desconhecida
            return null
    }
}

console.log(`Retângulo 15x25: ${calcularArea(15, 25, 'R')}`)
console.log(`Triângulo 12x12: ${calcularArea(12, 12, 'T')}`)
console.log(`Elipse 10x20: ${calcularArea(10, 20, 'E')}`)

// Usando o parâmetro predefinido
console.log(`Retângulo 10x15: ${calcularArea(10, 15)}`)

console.log(`Triângulo 20x16: ${calcularArea(20, 16, 'T')}`)

/*
    1) Pode haver mais de um parâmetro predefinido.
    2) Quando há um ou mais parâmetros predefinidos, eles devem
       estar no final da lista de argumentos.
*/
