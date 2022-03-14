function setup(){
  createCanvas(640, 640);
  strokeWeight(4);
  stroke(250);
  rectMode(CENTER);
}

function draw(){
  background(250);
  translate(width/2, height/2);
  for(let i = -5; i <= 4; i++){
    let x = i*30;
    let y = 0;
    fill(map(i, -10, 6, 10, 25), 50, 100);
    push();
    translate(x, y);
    rotate(radians(tan(radians(i+frameCount))+frameCount));
    rect(10, 10, 20, 500, 6);
    pop();
  }
}
