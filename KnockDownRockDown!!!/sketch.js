const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var randval;


var engine ,world;
var block1, block2, block3, block4, block5, block6;
var ground;
var rockimg;

function preload() {
  rockimg = loadImage("Rock.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,650);
  

  

  ground1 = new Ground(440, 250, 260, 20);
  ground2 = new Ground(740, 550, 260, 20);
  block1 = new Block(470, 200, 60, 60);
  block2 = new Block(410, 200, 60, 60);
  block3 = new Block(350, 200, 60, 60);
  block4 = new Block(370, 150, 60, 60);
  block5 = new Block(440, 150, 60, 60);
  block6 = new Block(405, 100, 60, 60);

  block7 = new Block(770, 500, 60, 60);
  block8 = new Block(710, 500, 60, 60);
  block9 = new Block(650, 500, 60, 60);
  block10 = new Block(670, 450, 60, 60);
  block11 = new Block(740, 450, 60, 60);
  block12 = new Block(705, 400, 60, 60);

  
  var options = {
    density: 10
  }
  polygon = Bodies.circle(150, 200, 20, options);
  //polygon.addImage("rock", rockimg)
  World.add(world, polygon);
  sling = new Slingshot(polygon, {x: 150, y: 200})
}

function draw() {
  background("lavender");  
  Engine.update(engine);
  //ground1.display();
  //ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  image(rockimg, polygon.position.x, polygon.position.y, 50,50);
  sling.display();
  
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 13){
      //bird.trajectory = [];
      sling.attach(polygon);
      Matter.Body.setPosition(polygon, {x: 100, y: 200});
  }
}