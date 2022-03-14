let resolution = 10;
let rad = 150;
let x = 1;
let y = 1;

let t = 0; 
let tChange = 02; 

let nVal; 
let nInt = 1; 
let nAmp = 1; 

let filled = false;


function setup() {
  createCanvas(400, 400);
  noiseDetail(8);
}

function draw() {
  background(255);
  translate(width/2, height/2);

  if (filled) {
    noStroke();
    fill(0);
  } 
  else {
    noFill();
    stroke(0);
    strokeWeight(1);
  }
  nInt = map(mouseX, 0, width, 0.1, 30); // map mouseX to noise letensity
  nAmp = map(mouseY, 0, height, 0.0, 1.0); // map mouseY to noise amplitude

  beginShape();
  for (let a=0; a<=TWO_PI; a+=TWO_PI/resolution) {
    nVal = map(noise( cos(a)*nInt+1, sin(a)*nInt+1, t ), 0.0, 1.0, nAmp, 1.0); // map noise value to match the amplitude
    x = cos(a)*rad *nVal;
    y = sin(a)*rad *nVal;
    vertex(x, y);  
    }
  endShape(CLOSE);
  t += tChange;
}

function mouseClicked() { 
  filled = !filled; 
}
