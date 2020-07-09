var bullet, wall, speed, thickness;
function setup() {
  createCanvas(1200,400);
  speed = random(223,350);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,20);

  wall = createSprite(1000, 200, 60, height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = "gray";
  wall.shapeColor  = "brown";
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x < bullet.width/2+wall.width/2) {
    bullet.velocityX = 0;
    var deform = 0.5*speed*speed/thickness*thickness;
    if(deform > 10) {
      wall.shapeColor = "red";
    }
    if(deform < 10) {
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}