let theta = 0;

function setup() {
  createCanvas(1000, 900);
}

function draw() {
  background(255);
  stroke(0);

  translate(width/2, height/2);

  for (let i = 0; i < TWO_PI; i += 0.2) {

    push(); 
    rotate(theta + i);
    line(0, 0, 100, 0);

    for (let j = 0; j < TWO_PI; j += 0.5) {
      push();
      translate(150, 0);
      rotate(-theta-j);
      line(0, 0, 300, 0);
      pop();
    }

    pop();
  }

  theta += 0.01;
}
