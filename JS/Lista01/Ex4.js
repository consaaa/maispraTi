let prompt = require('prompt-sync')()

colour = prompt('Escolha uma cor: (1 = Azul / 2 = Verde / 3 = Vermelho): ')

switch(colour){
    case '1':
        console.log('Você escolheu Azul')
        break
    case '2':
        console.log('Você escolheu Verde.')
        break
    case '3':
        console.log('Você escolheu Vermelho.')
        break
    case '':
        console.log('Você não escolheu uma cor.')
        break
}
