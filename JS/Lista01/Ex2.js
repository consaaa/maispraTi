let prompt = require('prompt-sync')()

age = Number(prompt('Digite a sua idade: '))

if (age > 0 && age < 12) {
    console.log('Você é uma criança.')
} else if (age >= 12 && age < 17) {
    console.log('Você é um(a) adolescente.')
} else if (age >= 18 && age < 60) {
    console.log('Você é um(a) adulto(a).')
} else if (age >= 60 && age <= 100) {
    console.log('Você é um(a) idoso(a).')
} else {
    console.log('Erro: Digite uma idade válida.')
}