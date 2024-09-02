let prompt = require('prompt-sync')()

n = Number(prompt('Informe um número: '))

for(let i = 1; i <= 10; i++) {
    let produto = n * i
    console.log(produto)
}