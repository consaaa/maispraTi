let prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número inteiro: '))

if (numero % 2 == 0) {
    console.log('O número é par.')
} else {
    console.log('O número é ímpar.')
}