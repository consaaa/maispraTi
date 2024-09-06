let prompt = require('prompt-sync')()

let nota = Number(prompt('Digite a sua nota: '))

if (nota >= 0 && nota < 6){
    console.log('Reprovado.')
} else if (nota >= 6 && nota < 7) {
    console.log('Recuperação')
} else if (nota >= 7 && nota <= 10){
    console.log('Aprovado')
}