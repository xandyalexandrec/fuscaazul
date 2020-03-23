# [Fusca Azul Challenge][![Netlify Status](https://api.netlify.com/api/v1/badges/573ec100-e387-45b7-aa91-a2907a46a3cd/deploy-status)](https://app.netlify.com/sites/fuscaazul/deploys)

Jogue em [https://fuscaazul.netlify.com/](https://fuscaazul.netlify.com/)

## Desafio técnico

Desenvolver um jogo de corrida de carros.

Ao abrir o jogo, deve aparecer um formulário contendo o campo Nome e um botão **Iniciar Corrida**. Um contador deve aparecer (3, 2, 1...). Após isso, o carro passará a se movimentar na pista.

O carro poderá alternar entre três lados da pista (esquerda, meio e direita). Podemos usar as teclas A (esquerda), S (meio), D (direita) para alternar a posição do carro. Além disso, também deve ser possível alternar a posição para esquerda ou direita usando as setinhas do teclado.

## Bônus

Logo abaixo você encontrará uma lista de recursos *nice to have*. Você tem autonomia para adicioná-los ao projeto ou não. Durante a nossa avaliação, cada bônus irá contar (muito) positivamente.

✔️ - **Pause** **→** ao pressionar ESC (ou outra tecla), o jogo é pausado. ⏸
🚫- **Obstáculos** **→** você tá lá na corrida e repentinamente aparece uma pedra gigante na estrada... O jogo fica bem mais desafiador, não é mesmo? 🤯
✔️ - **Turbo** **→** existem momentos onde é necessário acelerar para chegar a tempo. Que tal adicionar uma funcionalidade de turbo? O uso seria limitado, mas o carro iria ganhar muito mais velocidade!
✔️ - **Mobile** **→** e se o jogo pudesse ser jogado em um smartphone?
✔️ - **Número de Voltas** **→** a corrida possui ponto de saída e chegada. Para cada volta que o carro der, o número de voltas seria incrementado. Você pode colocar o número de voltas onde preferir.
🚫- **Multiplayer →** esse desafio aqui é moleza, então você quer fazer um pouco de back-end também. Esse bônus consiste em suportar múltiplos jogadores na mesma pista. 👀🚫
🚫- **Leaderboard →** mais back-end! Que tal armazenar o tempo que cada jogador levou para finalizar a corrida numa leaderboard? Fica mais competitivo!
🚫- **Apenas CSS →** pra você que é ninja no CSS, temos um bônus especial... e se nenhuma imagem ou vetor fosse usado em todo o desafio? Nenhuma... somente HTML, CSS e JavaScript.
✔️ - **Fim de Corrida →** não é nada divertido ficar correndo em círculos infinitamente, não é mesmo? Para resolver isso, você poderia encerrar a corrida após um determinado número de voltas.
✔️ - **Link Público →** que tal gerar um link público em que qualquer pessoa pode acessar e jogar também? Você pode usar qualquer solução de hospedagem.
✔️ - **Stack Upnid →** na Upnid, usamos React (com Hooks), GraphQL e Styled Components na maioria dos nossos projetos front-end. Ao construir o jogo usando essas tecnologias, você mostrará que, além de um excelente desenvolvedor, também conhece bem o nosso stack! 🙂
✔️ - **Documentação →** uma descrição detalhada contando mais sobre o seu jogo, como fazer build, executá-lo e rodar os testes. Além disso, também gostaríamos de saber mais sobre a estratégia que você adotou para construir o game.
🚫- **Testes →** boas práticas! Ao enviar uma atualização pro jogo, uma série de testes são executados, garantindo que o ele continua jogável e funcionando como esperado.

## Como jogar

|  teclas   | action                        |
|-----------|-------------------------------|
|`A`        | move para a pista da direita  |
|`S`        | move para a pista do meio     |
|`D`        | move para a pista da esquerda |
|`⭠`        | move para direita             |
|`⭢`        | move para esquerda            |
|`ESC`      | pausa o game                  |
|`ENTER`    | continua o jogo               |

## Stack

- ReactJS
- StyledComponents
- Hooks

## Instruções

### Desenvolvimento

```terminal
git clone https://github.com/xandyalexandrec/fuscaazul.git
yarn
yarn start
```

### Produção

```terminal
git clone https://github.com/xandyalexandrec/fuscaazul.git
yarn
yarn build
```
