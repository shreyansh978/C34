const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var ball,rope;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,700,1200,20);
    b1 = new Blocks(900,100,50,50);
    b2 = new Blocks(900,100,50,50);
    b3 = new Blocks(900,100,50,50);
    b4 = new Blocks(900,100,50,50);
    b5 = new Blocks(900,100,50,50);
    b6 = new Blocks(900,100,50,50);
    b7 = new Blocks(800,100,50,50);
    b8 = new Blocks(800,100,50,50);
    b9 = new Blocks(800,100,50,50);
    b10 = new Blocks(800,100,50,50);
    b11 = new Blocks(800,100,50,50);
    b12 = new Blocks(800,100,50,50);
    b13 = new Blocks(700,100,50,50);
    b14 = new Blocks(700,100,50,50);
    b15 = new Blocks(700,100,50,50);
    b16 = new Blocks(700,100,50,50);
    b17 = new Blocks(700,100,50,50);
    b18 = new Blocks(700,100,50,50);
    b19 = new Blocks(700,100,50,50);
    b20 = new Blocks(700,100,50,50);
    ball = new Ball(400,200,40,40);
    rope = new Rope(ball.body,{x:500,y:200});


    
}

function draw(){
    
    background(225);
    
    Engine.update(engine);
    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    ball.display();
    rope.display();
    
      
}

function mouseDragged(){
    
}


function mouseReleased(){
    
}



