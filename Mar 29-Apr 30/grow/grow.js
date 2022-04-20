const TOTAL = 30;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < TOTAL; i++){
    points.push({
      pos: createVector(width/2, height/2),
      dir: random(TWO_PI)
    });
  }
}

function draw() {
  for(var i = 0; i < TOTAL; i++){
    var point = points[i];
    point.pos.x += cos(point.dir);
    point.pos.y += sin(point.dir);
    circle(point.pos.x, point.pos.y, 10);
  }
}
