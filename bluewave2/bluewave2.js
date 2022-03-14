let theta=0;

function setup() {
  createCanvas(700, 700);
  smooth();
}

function draw() {
  theta+=.20;
  background(230);
  stroke(0,255,255);
  translate(width/2, height/2);
  noFill();
  let r=250;
  for (let i=-0.5*PI;i<PI+0.5*PI;i+=0.01*PI) {
    beginShape();
    for (let j=-sin(i)*r;j<sin(i)*r+sin(i);j+=sin(i)*20) {
      curveVertex(j, cos(i)*r+sin(theta-(j/40))*abs(i*10));
    }
    endShape();
  }
}
