class Forca {
    constructor() {
        this.letras = []
        this.acertos = ['_', '_', '_', '_', '_', '_', '_']
        this.vidas = 6
        this.palavra = ['A', 'B', 'A', 'C', 'A', 'X', 'I']
        this.palavraCheck = ''
        this.acertosCheck = ''
    }

    chutar(letra) {
        if (letra.length == 1) {
            if (!this.palavra.includes(letra) && !this.letras.includes(letra)) {
                this.letras.push(letra)
                this.vidas -= 1
            }

            switch (letra) {
                case 'A':
                    this.acertos.splice(0, 1, 'A')
                    this.acertos.splice(2, 1, 'A')
                    this.acertos.splice(4, 1, 'A')
                    this.letras.push(letra)
                    break
                case 'B':
                    this.acertos.splice(1, 1, 'B')
                    this.letras.push(letra)
                    break
                case 'C':
                    this.acertos.splice(3, 1, 'C')
                    this.letras.push(letra)
                    break
                case 'X':
                    this.acertos.splice(5, 1, 'X')
                    this.letras.push(letra)
                    break
                case 'I':
                    this.acertos.splice(6, 1, 'I')
                    this.letras.push(letra)
                    break
            }
        }
    }

    buscarEstado() {
        this.palavraCheck = JSON.stringify(this.palavra)
        this.acertosCheck = JSON.stringify(this.acertos)

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
