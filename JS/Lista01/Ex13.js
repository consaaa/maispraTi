let prompt = require('prompt-sync')()

let n = Number(prompt('Informe um número: '))
let sum = 0
let i = 0

while (n != 0) {
    sum += n
    n = Number(prompt('Informe outro número: '))
    i++
}

console.log((sum / i).toFixed(2))