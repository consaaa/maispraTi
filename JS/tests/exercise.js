// Even/Odd numbers:
//let number = -2
//if (number % 2 == 0){
//    console.log('O número é par.')
//} else {
//    console.log('O número é ímpar.')
//}

// Value comparison:
//let num1 = 2
//let num2 = 5
//let num3 = 1

//if((num1 > num2) && (num1 > num3)){
//    console.log('O primeiro valor é maior.')
//} else if ((num2 > num1) && (num2 > num3)){
//    console.log('O segundo valor é maior.')
//} else if ((num3 > num1) && (num3 > num2)){
//    console.log('O terceiro valor é maior.')
//}

//let x = 5
//let y = 2
//let calc = 4

//if (calc === 1){
//    console.log(x + y)
//} else if (calc === 2){
//    console.log(x - y)
//} else if (calc === 3){ 
//    console.log(x * y)
//} else if (calc === 4){
//    console.log(x / y)
//}


const prompt = require('prompt-sync')()

let num1 = Number(prompt('Insira o primeiro valor: '))

let num2 = Number(prompt('Insira o segundo valor: '))

let operation = prompt('Informe a operação desejada (+, -, /, *): ')


if(operation === '+'){
    console.log('O resultado é: ', num1 + num2)
} else if(operation === '-'){
    console.log('O resultado é: ', num1 - num2)
} else if(operation === '/'){
    console.log('O resultado é: ', num1 / num2)
} else if(operation === '*'){
    console.log('O resultado é: ', num1 * num2)
} else {
    console.log('Operação Inválida!')
}