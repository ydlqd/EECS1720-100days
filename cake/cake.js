let t = 4;
let theta;
let numb = 4;
let maxFrameCount = 100;

let a = 31;
let b = 7;

function setup() {
  createCanvas(540, 540, P2D);
  noFill();
  strokeWeight(3);
  noStroke();
  strokeCap(ROUND);

}

function draw() {
  background(255);
  translate(width/2, height/2);  

  theta = TWO_PI*t;
  for ( let x= 0; x <= 350; x += 15) {
    for (let i = 0; i < numb-1; i++) {
      let rot = TWO_PI/numb*i;

      let offSet = (i*b)+(x*a);   
      let sz1 = map(cos(-(theta)+offSet), 0, 1, 90, 0);
      let sz2 = map(sin(-(theta)+offSet), 0, 1, 0, 90);

      stroke(160-(x/3), 180, 105+(x/3));
      rotate(rot);
      arc(0, 0, x, x, radians(sz2), radians(sz1));
    }
  }

}
