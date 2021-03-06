const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  towerImage = loadImage("./assets/tower.png");
  CannonImage = loadImage("./assets/background.gif");

}

function setup() {
  canvas = createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180,110,100,50,-PI/4)
  

}

function draw() {
  background(189);
  image(CannonImage,0,0,width,height)
  Engine.update(engine);

  ground.display();
  
  tower.display();
  
 cannon.display();
}
