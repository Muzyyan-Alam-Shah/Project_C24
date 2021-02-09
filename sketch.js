
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground=new Ground(750,680,1500,20);
   
  
paperObject=new Paper(150,100,20);

leftwall=new Dustbin(1350,650);
rightwall=new Dustbin(1350,650);
base=new Dustbin(1250,650)
Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperObject.display();
  leftwall.display();
  //rightwall.display();
  //base.display();
  drawSprites();
  Engine.update(engine);
  
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}



