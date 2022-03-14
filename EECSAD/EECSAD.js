var alp = 100;

function setup() {
  createCanvas(350, 600);
  colorMode(HSB, 100, 360, 60,100);
  textAlign(CENTER, CENTER);
  textSize(50);
  strokeJoin(ROUND);
  rectMode(CENTER);
  frameRate(10);
}

function draw() {
  blendMode(BLEND);
  background(0);

  if(random(1) < 0.05){
    alp = 60;
  }
  else {
    alp = 100;
  }
  
  noFill();
  blendMode(SCREEN);
  for (var i = 1; i < 50; ++i) {
    strokeWeight(i*0.7);
    stroke(
      map(i, 1, 50, 180, 360), 
      80, 
      map(i, 1, 50, 15, 1), 
      alp
      );
    
    rect(width/2, height/2, 120, 430, 10);
    text("E\nE\nC\nS\nG\nO", width/2, height/2);
  }
}
