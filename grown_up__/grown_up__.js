var n=1;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(238);
  stroke(34, 10);
  noFill();
  strokeWeight(1);
} 

function draw() {
  var d = 300 + frameCount%100;
  var end = map(noise(n), 0, 1, PI, TWO_PI);
  arc(width/2, height/2, d, d, HALF_PI, end);
  n += 0.05;
  if (frameCount>2800) noLoop();
}
