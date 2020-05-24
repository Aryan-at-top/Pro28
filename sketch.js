
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(600,750,2400,50) 
  paper= new Paper(200,550,25);
  hand= new Hand(paper.body,{x:200,y:550});
  stick1= new Dustbin(800,657,10,100);
  stick2= new Dustbin(900,657,10,100);
  stick3= new Dustbin(850,716,110,15)
}

function draw() {
  background(5,255,0);  
  Engine.update(engine); 
  ground.display();
  hand.display();
  paper.display();
  stick1.display();
  stick2.display();
  stick3.display();
  drawSprites();
}


function mouseDragged() {
  paper.body.position.x=mouseX
  paper.body.position.y=mouseY
}

function mouseReleased() {
  hand.freedom()
}
