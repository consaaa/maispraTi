//let serie = {
//    nome: 'The Boys',
//    genero: 'Ação, Paródia, Heróis',
//    nrTemporadas: 4,
//    status: 'Em andamento',
//    classificacao: 18,
//   nrEp: {
//        temp1: 10,
//        temp2: 20,
//        temp3: 30
//    },

//    mostrarCaracteristicas: function(){
//        return `O nome da série é: ${this.nome} e sua classificação é +${this.classificacao}`
//    }
//}
//
//console.log(serie.mostrarCaracteristicas())


let carro = {
    nome: 'McLaren MP4/4',
    piloto: 'Ayrton Senna',
    year: 1988,
    
    showCharacteristics: function(){
        return (this.nome  + ' foi pilotado por ' + this.piloto + ' em ' + this.year)
    }
}

//console.log(carro.showCharacteristics())
// Para que o elemento "this" se refira corretamente à função, não se usa a "Arrow Function" === () => {}


