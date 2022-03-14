
let radius = 50;
let bar = 150;
let step = 0;

function setup(){
  createCanvas(640, 640);
}

function draw(){
  background(250);
  translate(width / 2, height / 2);
  noStroke();
  for(let angle = 0; angle < 360; angle +=3){
    let radian = radians(angle);
    push();
    translate(radius * cos(radian), radius * sin(radian));
    rotate(radian + radian * step *60 + frameCount * 0.02);
    strokeWeight(2);
    stroke(20,0,74);
    stroke(25,0,255);
    line(bar / 2, 0, -bar / 2*cos(radian), 0);
    fill(255,255,74);
    noStroke();
  ellipse(bar / 2, 0, 5,5);
  ellipse(-bar / 2*cos(radian), 0, 6*cos(radian),6*cos(radian));
    pop();
  }
}

function mousePressed(){
  step++;
  if(step > 20){
    step = 0;
  }
}
