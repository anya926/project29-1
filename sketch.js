const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pentagonImg;

function preload() {
  pentagonImg = loadImage("pentagon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground  = new Ground(400,height,800,20);
  stand = new Ground(400,380,120,10);

  //level 1
  block1 = new Box(400,360,40,60);
  block2 = new Box(420,360,40,60);
  block3 = new Box(380,360,40,60);

  //level 2
  block4 = new Box(390,330,40,60);
  block5 = new Box(410,330,40,60);

  //level 3
  block6 = new Box(400,300,40,60);

  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(175);  
  Engine.update(engine);
  ground.display();
  stand.display();
  fill(20,255,225);
  block1.display();
  block2.display();
  block3.display();
  fill(255,20,225);
  block4.display();
  block5.display();
  fill(255);
  block6.display();
  imageMode(CENTER);
  image(pentagonImg, polygon.position.x, polygon.position.y,40,40);
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon);
  }
}