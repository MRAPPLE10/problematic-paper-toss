
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var ball;
var bin;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	
	
	ball = new Ball(200,350,50);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	
    
  
}


function draw() {
	background(0);
  Engine.update(engine);
 
  ball.display();
  
  
 
}



