let prompt = require('prompt-sync')()

let quant = Number(prompt('Informe a quantidade de maçãs a serem compradas: '))

if (quant > 0 && quant < 12) {
    let unitprice = 0.30
    let totalprice = quant * unitprice
    console.log(`O preço total da compra é R$ ${totalprice.toFixed(2)}.`)
} else if (quant >= 12){
    let unitprice = 0.25
    let totalprice = quant * unitprice
    console.log(`O preço total da compra é R$ ${totalprice.toFixed(2)}.`)
} else {
    console.log('Erro: Insira uma quantidade válida de maçãs.')
}