let order = [];
let clickedOrder = [];
let score = 0; // contar a vez que cliclou

/*
  0 - verde
  1 - vermelho 
  2 - amarelo
  3 - azul
*/

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// cria order aleatória de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  // atribuindo o índice do array com a cor que saiu no sorteio
  clickedOrder = [];

  // acender a cor do númor sorteado
  for(let i in order){
    let elementColor = crateColorElementy(order[i]);
    // cada vez que o for rodar, o tamanho var ser equivalente a qunatiade de rodadas
    // então cada vez que ele rodar, esse i vai ser o indice que a gente vai colocar dentro da variável
    lightColor(elementColor, Number(i) + 1); // trazer um numero mais uma para existir na lista de cores
  }
}

// acende a próxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  })
}

// checa se os botoes cliclados são os mesmos da ordem no jogo
let checkOrder = () => {
  for(let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontuação: ${score} \nVocê acertou! Iniciando próximo nível`);
    nextLevel();
  }
}

// funcão para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  crateColorElementy(color).classList.add('selected');

  setTimeout(() => {
    crateColorElementy(color).classList.remove('selected');
    checkOrder();
  }, 250)
}

// função que retorna a cor
let crateColorElementy = (color) => {
  if (color == 0) {
    return green;
  }else if(color == 1){
    return red;
  }else if(color == 2){
    return yellow;
  }else if(color == 3){
    return blue;
  }
}

//função para o próximo nível do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
}

// função para game over
let gameOver = () => {
  alert(`Pontuação: ${score} \nVocê perdeu o jogo! \nClique em OK para iniciar um novo jogo`)
  order = [];
  clickedOrder = [];

  playGame();
}

//iniciar o jogo
let playGame = () => {
  alert('Bem vindo ao Gênesis! Iniciando novo jogo!')
  score = 0;

  nextLevel();
}

//eventos de clicks para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// inicio do jogo
playGame()