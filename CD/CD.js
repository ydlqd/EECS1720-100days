function setup() {
  createCanvas(640, 640);
  fill(255,120,120);
  noStroke();
}

function draw() {
  background(0);
  translate(width/2, height/2);
  for (let q = 1; q < 15; q++) {
    let s = q*12;
    for (let i = 0; i < 360; i+=3  ) {
      let x = sin(radians(i))*s;
      let y = cos(radians(i))*s;
      let m = 0.5+sin(radians(sin(radians(frameCount))*s+i+frameCount*2));
      if(m > 0){
        ellipse(x, y, m*q, m*q);
      }
    }
  }
}
