let prompt = require('prompt-sync')()

let ladoA = Number(prompt('Insira o valor do primeiro lado: '))
let ladoB = Number(prompt('Insira o valor do segundo lado: '))
let ladoC = Number(prompt('Insira o valor do terceiro lado: '))

if ((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)) {
    if ((ladoA == ladoB) && (ladoB == ladoC)) {
        console.log(`Seu triângulo é equilátero.`)
    } else if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)) {
        console.log('Seu triângulo é isósceles.')
    } else if ((ladoA != ladoB) && (ladoB != ladoC)) {
        console.log('Seu triângulo é escaleno.')
    }
} else {
    console.log('Erro: Os valores informados não formam um triângulo.')
}
