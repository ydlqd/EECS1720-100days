function setup() {
  createCanvas(400, 400);
  frameRate(60);
  noStroke();
}
function draw() {
  noCursor();
  noStroke();
  fill(255, 15);
  rect(0, 0, width, height);
  push();
  translate(mouseX, mouseY);
  rotate(frameCount);
  stroke(66,255,120);
  fill(125,150,250);
  rect(0, 0, 25, 25, 3, 15, 3, 15);
  pop();
}
