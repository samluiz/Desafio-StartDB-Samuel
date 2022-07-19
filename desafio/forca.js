class Forca {
    constructor() {
        this.letras = []
        this.acertos = ['_', '_', '_', '_', '_', '_', '_']
        this.vidas = 6
        this.palavra = ['A', 'B', 'A', 'C', 'A', 'X', 'I']
        this.palavraCheck = ''
        this.acertosCheck = ''
        this.letraPadrao
    }

    chutar(letra) {
        let letraPadrao = letra.toUpperCase()

        if (letraPadrao.length == 1) {
            if (
                !this.palavra.includes(letraPadrao) &&
                !this.letras.includes(letraPadrao) // Checando se a letra já foi informada anteriormente para ignorar a jogada nesse caso
            ) {
                this.letras.push(letraPadrao)
                this.vidas -= 1 // Tirando uma vida caso a letra informada não esteja na palavra secreta
            }

            // Adicionando os caracteres aos arrays de letras corretas e de letras inseridas
            switch (letraPadrao) {
                case 'A':
                    this.acertos.splice(0, 1, 'A')
                    this.acertos.splice(2, 1, 'A')
                    this.acertos.splice(4, 1, 'A')
                    this.letras.push(letraPadrao)
                    break
                case 'B':
                    this.acertos.splice(1, 1, 'B')
                    this.letras.push(letraPadrao)
                    break
                case 'C':
                    this.acertos.splice(3, 1, 'C')
                    this.letras.push(letraPadrao)
                    break
                case 'X':
                    this.acertos.splice(5, 1, 'X')
                    this.letras.push(letraPadrao)
                    break
                case 'I':
                    this.acertos.splice(6, 1, 'I')
                    this.letras.push(letraPadrao)
                    break
            }
        }
    }

    buscarEstado() {
        this.palavraCheck = JSON.stringify(this.palavra)
        this.acertosCheck = JSON.stringify(this.acertos) // Transformando os arrays em strings JSON

        if (this.palavraCheck === this.acertosCheck) {
            return 'ganhou!!!'
        } else if (this.vidas <= 0) {
            return 'perdeu...'
        }
    } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

    buscarDadosDoJogo() {
        return {
            letrasChutadas: this.letras, // Deve conter todas as letras chutadas
            vidas: this.vidas, // Quantidade de vidas restantes
            palavra: this.acertos, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
        }
    }
}

module.exports = Forca
