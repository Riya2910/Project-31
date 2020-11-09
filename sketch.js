const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//create var
var particle = []
var plinko = []
var divisions = []
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,height,1200,20);
}

function draw() {
  background(255,255,255); 
for(var k =0; k <=width; k=k+80){
  divisions.push(new Divisions(k, heigth-divisionHeight/2,10, divisionHeight))
}
for(var k =0; k <=width; k=k+80){
  divisions.push(new Divisions(k, heigth-divisionHeight/2,20, divisionHeight))
}
for(var k =0; k <=width; k=k+80){
  divisions.push(new Divisions(k, heigth-divisionHeight/2,30, divisionHeight))
}
for(var k =0; k <=width; k=k+80){
  divisions.push(new Divisions(k, heigth-divisionHeight/2,40, divisionHeight))
}
for(var k =0; k <=width; k=k+80){
  divisions.push(new Divisions(k, heigth-divisionHeight/2,50, divisionHeight))
}
for(var k =0; k <=width; k=k+80){
  divisions.push(new Divisions(k, heigth-divisionHeight/2,60, divisionHeight))
}
for(var k =0; k <=width; k=k+80){
  divisions.push(new Divisions(k, heigth-divisionHeight/2,70, divisionHeight))
}
for(var k =0; k <=width; k=k+80){
  divisions.push(new Divisions(k, heigth-divisionHeight/2,80, divisionHeight))
}


for(var j =40; j<=width;j=j+50){
  plinkos.push(new Plinko(j,75) )
}
for(var j= 15;j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10), 10, 10))
}

for(var j=0; j<particles.length;j++){
  particles[j].display();

}
for (var k = 0; k <divisions.length;k++){
  divisions[k].display();
}
  drawSprites();
  Ground.display();
}