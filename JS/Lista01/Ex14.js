// 5! = 5 * 4 * 3 * 2 * 1

let prompt = require('prompt-sync')()

let produto = 1

let n = Number(prompt('Informe um número: '))
let n1 = n

for(n; n >= 1; n--) {
    produto *= n
}
console.log(`O fatorial de ${n1} é ${produto}.`)