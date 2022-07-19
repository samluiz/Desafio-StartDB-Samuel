const readline = require('readline-sync')
const Forca = require('./forca')

const jogo = new Forca('abacaxi')

while (!['perdeu...', 'ganhou!!!'].includes(jogo.buscarEstado())) {
    const chute = readline.question('Aguardando chute: \n')
    jogo.chutar(chute.toUpperCase()) // Implementei um método para deixar todas as letras dos chutes em maiúsculo, para manter um padrão no programa e prevenir erros
    console.log(jogo.buscarDadosDoJogo())
}

console.log('Você ' + jogo.buscarEstado())
