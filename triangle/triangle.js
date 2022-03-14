function setup() {
  createCanvas(500, 500);
  noFill();
  noStroke();
  colorMode(HSB, 100);
}

let boxWidth = 300;
let boxHeight= 250;
let divisions = 0.9;
let colour = 1;
 
function draw() {
  background(0, 0, 90);
  for (let i = 0; i < divisions; i++) {
    for (let j = 0; j <= i; j++) {
      let boxWidth2 = boxWidth - (boxWidth/divisions) * i;
      let boxHeight2 = boxHeight - (boxHeight/divisions) * i;
      let x = width/2  - (boxWidth/divisions/2)*i + j*(boxWidth/divisions);
      let y = height/2 + (boxHeight/divisions/2)*i;
      fill(colour, 100, 20, 10);
      triangle(x, y - boxHeight2/2, x - boxWidth2/2, y + boxHeight2/2, x + boxWidth2/2, y + boxHeight2/2);
    }
  }
  colour += 0.5;
  if (colour >= 100) {
    colour = 0;
  }
  divisions += 0.02;
  if (divisions >= 8){
   divisions = 8;
  }
  noise();
}

function noise() {
  noStroke();
  strokeWeight(1);
  for (let i = 0; i < width - 1; i += 5) {
    for (let j = 0; j < height - 1; j += 5) {
      fill(random(0, 150), random(0, 20));
      rect(random(i - 5, i), random(j - 5, j), 1, 1);
    }
  }
  for (let i = 0; i < 10; i++) {
    fill(random(0, 255), random(0, 200));
    rect(random(0, width), random(0, height), random(1, 3), random(1, 3));
  }
}
