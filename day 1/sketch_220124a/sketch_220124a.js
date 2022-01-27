function setup() {
  createCanvas(400, 400);
  noStroke();
  //first time study p5.js 
}

function draw() {
  background(160,120,120);
  if(mouseIsPressed){
    fill(0);}
  else
  {fill(255); }
  ellipse(mouseX,mouseY,80,80);
  
}
function keyTyped() {
  if (key === 'q') {
  {fill(0); }
  ellipse(120,80,80,80);
  } 
}
