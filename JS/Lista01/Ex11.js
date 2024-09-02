let prompt = require('prompt-sync')()

let sum = 0

for(i = 1; i <= 5; i++) {
    let n = Number(prompt(`Insira o ${i}° número: `))
    sum += n
}

console.log(`A soma total é: ${sum}`)

