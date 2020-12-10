
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

function preload()
{

}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,470,800,20);
	ground.shapeColor = color(255,255,0);

	paper = new Paper(60,450);
	paper.shapeColor = color(255,0,255);
	
	box = new Dustbin(500,445);
	box.shapeColor = color(255);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
  ground.display();
  paper.display();
  box.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-340})
	}
}
