// and (&&), or (||), not(!)

// if (condition)
// (true)
// else (false)

//const grade = 4
//if(grade >=60){
//    console.log(`Approved.`)
//} else{ 
//    console.log(`Not Approved.`)
//}
//console.log(`End`)

//let age = 32

//if ((age >= 18) && (age <= 32)){
//    console.log(`Pode se inscrever no concurso!`)
//} else {
//    console.log(`Nao pode se inscrever no concurso.`)
//}

//let ternaryResult = (age >= 18) && (age <= 32) ? 'Pode se inscrever no concurso!' : 'Não pode se inscrever no concurso.'
//console.log(ternaryResult)


//let number = -2
//if (number % 2 == 0){
//    console.log('O número é par.')
//} else {
//    console.log('O número é ímpar.')
//}



//const input = require('prompt-sync')()
//let year = Number(input('Insira o número de um ano: '))

//if((year % 4 == 0) && (year % 100 !== 0)){
//    console.log(`O ano é bissexto.`)
//} else {
//    console.log('O ano é comum.')
//}

//const input = require('prompt-sync')()
//let number = Number(input('Insira um número: '))
//if(number > 0){
//    console.log('O número é positivo.')
//} else if (number == 0){
//    console.log('O número é zero.')
//} else {
//    console.log('O número é negativo.')
//}


const input = require ('prompt-sync')()
let n1 = Number(input('Insira a primeira nota: '))
let n2 = Number(input('Insira a segunda nota: '))
let n3 = Number(input('Insira a terceira nota: '))

let grade = ((n1 + n2 + n3) / 3)
if((grade == 0)){
    console.log('F')
} else if((grade == 6)){
    console.log('D')
} else if((grade == 7)){
    console.log('C')
} else if((grade == 8)){
    console.log('B')
} else if((grade == 9)){
    console.log('A-')
} else if((grade == 10)){
    console.log('A+')
}