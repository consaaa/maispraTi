// IMC = peso/altura (kg/m²)

let prompt = require('prompt-sync')()

let weight = Number(prompt('Insira seu peso (kg): '))

let height = Number(prompt('Insira sua altura (m): '))

let bmi = weight / (height ^ 2)

if (bmi < 18.5 ){
    console.log(`Seu IMC é ${bmi.toFixed(2)} e sua classificação é: Abaixo do peso.`)
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`Seu IMC é ${bmi.toFixed(2)} e sua classificação é: Peso normal.`)
} else if (bmi >= 25 && bmi <= 29.9){
    console.log(`Seu IMC é ${bmi.toFixed(2)} e sua classificação é: Acima do peso.`)
} else if (bmi >= 30 && bmi <= 39.9){
    console.log(`Seu IMC é ${bmi.toFixed(2)} e sua classificação é: Obesidade.`)
} else {
    console.log(`Seu IMC é ${bmi.toFixed(2)} e sua classificação é: Obesidade mórbida.`)
}