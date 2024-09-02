let prompt = require('prompt-sync')()

let VALUE1 = Number(prompt('Insira o valor a ser convertido: '))
let UNIT1 = prompt('Escolha a unidade de medida inicial (C/F): ')

if(UNIT1 == 'F'){
    VALUE1 = (VALUE1 - 32) / 1.8
    console.log(`O valor convertido é ${VALUE1.toFixed(2)} °C.`)
} else if(UNIT1 == 'C'){
    VALUE1 = VALUE1 * 1.8 + 32
    console.log(`O valor convertido é ${VALUE1.toFixed(2)} °F.`)
} else {
    console.log('Erro: Unidade inválida.')
}

