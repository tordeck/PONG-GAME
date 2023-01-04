// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 20;
let raio = dBolinha / 2;
// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variáveis da raquete
let xraquete = 5;
let yraquete = 150;
let wraquete = 10;
let hraquete = 90;
// varíaveis do oponente
let xraqueteoponente= 585;
let yraqueteoponente= 150;
let velocidadeyoponente
let chanceDeErrar = 0;
// variáveis do placar do jogo
let meuspontos = 0;
let pontosdooponente= 0;
//variáveis sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3"); 
  ponto = loadSound ("ponto.mp3");
  raquetada= loadSound ("raquetada.mp3");
}

//variáveis de colisão
let colidiu = false

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisaoborda();
  raquete1(xraquete,yraquete);
  movimentaminharaquete();
  verificaColisaoRaquete(xraqueteoponente,yraqueteoponente);
  verificaColisaoRaquete(xraquete,yraquete);
  raquete1(xraqueteoponente,yraqueteoponente);
  movimentaraqueteoponente();
  incluiplacar();
  marcaponto();
  bolinhaNaoFicaPresa();
  }

function mostraBolinha (){
 circle (xBolinha,yBolinha,dBolinha); 
}
function movimentaBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoborda (){
    if (xBolinha + raio > width || 
     xBolinha - raio < 0){ velocidadeXBolinha *= -1;
}
  if (yBolinha + raio > height || 
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
}
  }
function raquete1 (x,y){
      rect(x,y,wraquete,hraquete);
}

function movimentaminharaquete (){
  if (keyIsDown(UP_ARROW)){
    yraquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW)){
    yraquete += 10;
}
}
function verificacolisãoraqueteoponente (){
  if (xBolinha - raio < xraquete + wraquete && yBolinha - raio < yraquete + hraquete  && yBolinha + raio > yraquete){ velocidadeXBolinha *= -1;    
}
}

function movimentaraqueteoponente (){velocidadeyoponente = yBolinha - yraqueteoponente - wraquete / 2 -30;
yraqueteoponente += velocidadeyoponente + chanceDeErrar
  calculaChanceDeErrar()
   }
function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, wraquete,hraquete, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
      raquetada.play();
       }
}
function incluiplacar (){
  stroke (210)
  textAlign (CENTER);
  textSize (16);
  fill (color(255,140,0));
  rect (150,10,40,20)
  fill (255)
  text (meuspontos,170,26); 
  fill (color(255,140,0));
  rect (450,10,40,20)
  fill (255)
  text (pontosdooponente, 470,26)
}
function marcaponto (){
  if (xBolinha > 590){meuspontos +=1;
                     ponto.play();}
  if (xBolinha < 10){pontosdooponente +=1;
      ponto.play();              }
      }

function calculaChanceDeErrar() {
  if (pontosdooponente >= meuspontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 300
    }
    if (xBolinha - raio > 580 ){
      xBolinha = 300
    }
}
