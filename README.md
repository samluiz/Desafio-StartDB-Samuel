# Desafio técnico da Start DB

Objetivo: Fazer um jogo da forca

REGRAS: 

- O jogo deve iniciar com 6 vidas
- O jogo deve iniciar com o estado `aguardando chute`.
- Todo chute deve conter apenas uma letra, caso tenha mais de uma a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
- Caso a letra chutada esteja errada mas já foi chutada anteriormente a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
- Toda chamada ao método chutar deve registrar a letra em letrasChutadas
- Se a letra chutada não estiver contida na palavra, deve subtrair uma vida
- Se a letra chutada estiver contida na palavra, deve ser substituida na "palavra" em sua respectiva posição. 
Ex.: A palavra secreta é "bala" e o jogador chutou a letra "b", então a palavra que é retornada no método buscarDadosDoJogo, deve ser ["b", "_", "_", "_" ].
- Caso a quantidade de vidas chegue a 0 (zero), o estado do jogo deve mudar para `perdeu`.
- Caso a quantidade de vidas seja maior que zero e o jogador acerte a última letra, o estado do jogo deve mudar para `ganhou`.
