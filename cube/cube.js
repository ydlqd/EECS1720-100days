function setup() {
  createCanvas(400, 400);
  rectMode(CORNERS);
}
function draw() {
  background(255);
  noStroke();
  fill(230, 20, 20);
  rect(100, 0, 400, 300);
  fill(40, 20, 200);
  rect(0, 300, 100, 400);
  fill(230, 230, 20);
  rect(380, 350, 400, 400);
  stroke(0);
  strokeCap(SQUARE);
  strokeWeight(12);
  line(100, 0, 100, 400);
  line(0, 300, 400, 300);
  line(380, 300, 380, 400);
  strokeWeight(20);
  line(0, 200, 100, 200);
  line(380, 350, 400, 350);
}
