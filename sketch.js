let collided = false;

//variables
let xBall = 300;
let yBall = 200;
let diameter = 13;
let radius = diameter /2;

//velocity
let veloXBall = 6;
let veloYBall = 6;

//racket variables
let xRacket = 15;
let yRacket = 150;
let wRacket = 6;
let hRacket = 80;

//oponent variables
let xOponentRacket = 570;
let yOponentRacket = 150;
let veloYOponent;
let missChance = 0;

//game points
let myPoints = 0;
let oponentPoints = 0;

//soundtrack
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  showBall();
  moveBall();
  borderColision();
  showRacket(xRacket, yRacket);
  moveMyRacket();
  racketCollision(xRacket, yRacket);
  showRacket(xOponentRacket, yOponentRacket);
  moveOponentRacket();
  racketCollision(xOponentRacket, yOponentRacket);
  includePoints();
  score();
  
}
 function showBall(){
   circle(xBall, yBall, diameter);
   
 } 
 function moveBall(){
   xBall += veloXBall;
   yBall += veloYBall;
   
 }
 function borderColision(){
   if (xBall + radius > width || xBall - radius < 0){
    veloXBall *= -1;
    
  }
   if (yBall + radius > height || yBall - radius < 0){
    veloYBall *= -1;
      
      }
   
 }
  function showRacket(x,y){
    rect(x, y, wRacket, hRacket);
      
    }
  function moveMyRacket(){
    if (keyIsDown(UP_ARROW)){
      yRacket -= 10;
      
    }
    if (keyIsDown(DOWN_ARROW)){
      yRacket += 10;
    }
  }
  function racketColision(){
    if (xBall - radius < xRacket + wRacket
       && yBall - radius < yRacket + hRacket
       && yBall + radius > yRacket){
      veloXBall *= -1;
      raquetada.play();
    }
    
  }
  function racketCollision(x,y){
    collided = collideRectCircle(x, y, wRacket, yRacket, xBall, yBall, radius);
    if(collided){
      veloXBall *= -1;
      raquetada.play();
      
    }
  
  }
  function moveOponentRacket(){
    veloYOponent = yBall - yOponentRacket - wRacket / 2 - 30;
    yOponentRacket += veloYOponent
    calculateMissChance()
    
  }
  function includePoints(){
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(myPoints, 170, 26);
    fill(color(255, 140, 0));
    rect(410, 10, 40, 20);
    fill(255);
    text(oponentPoints, 430, 26);
    
  }
  function score(){
    if (xBall > 590){
      myPoints += 1;
      ponto.play();
      
    }
    if (xBall < 10){
      oponentPoints += 1;
      ponto.play();
      
    }
  }
  function preload(){
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
    
  }
  function calculateMissChance(){
    if (oponentPoints >= myPoints){
      missChance += 1;
      
      if (missChance >= 39){
        missChance = 40;
        
      }
    } else {
      missChance -= 1;
      
      if (missChance <= 35){
        missChance = 35;
      }
      
    }
    
  }
  function stuckBall(){
    if (xBall - radius < 0){
      xBall = 23
    }
  }

  
  