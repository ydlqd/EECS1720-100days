let time = 0;
let dr = 0.5, dt = 0.005, dtheta = 1;
function setup(){
  createCanvas(400,400);
  background(0);
  colorMode(HSB);
}

function draw(){
  translate(width/2,height/2);
  time += dt;
  background(255);
  fill(5,255,255,10);
  noStroke();
  for(let r=1; r<50; r+=dr){
    beginShape();
    for(let theta=0; theta<360; theta+=dtheta){
      let drift = noise(r/50*cos(radians(theta))+4, r/50*sin(radians(theta))+4, time)*r*4;
      vertex((r+drift)*cos(radians(theta)),(r+drift)*sin(radians(theta)));
    }
    endShape();
  }
}
