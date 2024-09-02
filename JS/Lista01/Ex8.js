let prompt = require('prompt-sync')()

let n1 = Number(prompt('Insira o primeiro valor: '))
let n2 = Number(prompt('insira o segundo valor: '))

while (n1 === n2){
    console.log('Erro: Os valores não podem ser iguais. Tente de novo.')
    n1 = Number(prompt('Insira o primeiro valor: '))
    n2 = Number(prompt('insira o segundo valor: '))
}

if (n1 < n2){
    console.log(`${n1}, ${n2}`)
} else {
    console.log(`${n2}, ${n1}`)
}