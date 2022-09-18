//HISTÓRIA:
//Um viajante chamado Gökhan está em uma viajem em busca de conhecimento, com seu destino final sua cidade natal.
// Desafios e obstáculos o aguardam.

var PC;
var MovDireita;
var chão
var bg; //background

var pla1
var pla2
var pla3

var bird
var boar
var cobra

var PCI;
var bgI;


function preload(){
PCI = loadAnimation('./gifs/personagem principal....gif');
MovDireita = loadAnimation('./gifs/personagem principal correndo.gif')
bgI = loadImage('./imagens/cenarioOriginal.png');
bird = loadAnimation('./gifs/passaro.gif');
boar = loadAnimation('./gifs/javali.gif');
//boadD = loadAnimation('./gifs/javali'
}

function setup(){
    createCanvas(1000, 500);

    PC = createSprite(200, 392, 30, 30);
    PC.addAnimation('PCi', PCI);
    PC.scale = 0.35;

    PC.addAnimation('MovD', MovDireita)

    chão = createSprite(500, 502, 1000, 60);
    chão.visible = false;
}

function draw(){
    background(bgI);

    camera.on();
    camera.x = PC;
    camera.y = PC

    PC.collide(chão);

    drawSprites();

// -------------------- Movimentação --------------------
    
    if(keyIsDown(RIGHT_ARROW)){
        PC.position.x += 4.5
        PC.changeAnimation('MovD');
       }

       if(keyIsDown(LEFT_ARROW)){
        PC.position.x -= 4.5
       }

       if(keyDown(UP_ARROW)){
        PC.velocity.y -= 3
       }

       PC.velocity.y = PC.velocity.y + 0.8

       if(!keyIsDown(RIGHT_ARROW)){
        PC.changeAnimation('PCi')
       }
       
       Bird();
 }

 function Bird(){
    if(frameCount % 60 === 0){
        bird = createSprite(1000, 100, 30, 30);
        bird.velocityX = 3
        //bird.addAnimation
        //bird.scale = xx
        bird.y = Math.round (random(10, 80));
        //bird.depth = nome de objeto. Ex: PC.depth ou boar.depth (profundidade)
        //birdGroup.add(bird)
    }
 }
