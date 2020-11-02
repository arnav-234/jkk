var car1
var car2
var car3
var car4
var wall
var wall1
var wall2
var wall3

var speed
var weight

function setup() {
    createCanvas(1600,400);
 car1= createSprite(1600, 100, 20, 20);
wall= createSprite(1600, 50, 20, 20);
= wall1 = createSprite(1600, 100, 20, 20);
 speed=random(55,90)
 weight=random(400,1500)
 
}

function draw() {
  car1.velocityX=speed
   background(255,255,255);   
   if(wall.x-car1.x<(car1.width+wall.width)/2)
   {
    car1.velocityX=0   
    deformation =  0.5*weight*speed*speed/22500 
  if(deformation<100)
  {
    car1.shapeColor=color(0,255,0)
  }
  if(deformation>100 && deformation<180)
  {
    car1.shapeColor=color(230,230,0)
  }
  if(deformation>180)
  {
    car1.shapeColor=color(255,0,0)
  }
}