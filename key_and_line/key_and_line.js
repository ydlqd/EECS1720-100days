let  xA, yA, xB, yB, x1,y1,x2,y2;
let sx, sy;
let angle;
let speed;
let radi;
let c,s;

function setup() {
  createCanvas(750,450);
  background(255);
  smooth();
  sx = random(10.0);
  sy=random(10.0);
  angle=0.0;
  speed=0.01;
  radi=300.0;
  xA = 20;
  yA = height/2;
  xB = width-20;
  yB = height/2;
}

function draw() {
  c = cos(angle);
  s = sin(angle/sy);
  x1 = width/3+c*radi;
  y1 = height/2+s*radi;
  x2 = 2*width/3 + cos(angle/sx)*radi;
  y2 = height/2 + sin(angle)*radi;
  noFill();
  stroke(0,10);
  bezier(xA,yA,x1,y1,x2,y2,xB,yB);
  angle+=speed;
}

function neteja() {
  background(255);
}

function keyPressed() {
  switch(key) {
    case('1'):
    neteja();
    sx=5.0;
    sy=random(1);
    break;
    case('2'):
    neteja();
    sx=random(1);
    sy=2.0;
    break;
    default:
    neteja();
      sx = random(5.0);
  sy=random(5.0);

  }
}
