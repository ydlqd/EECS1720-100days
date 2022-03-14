function setup() {
  createCanvas(250, 250);
}
let N = 9, r = 50;
let k=0, t ;
function draw() {
  background(26);
  strokeWeight(8);
  stroke(-1);
  translate(width>>1, height>>1);
  for (let i=0; i<N; i++) {
    let ang = 360/N;
    let l = r*sin(radians(ang/2));
    let x = r*cos(radians(ang*i));
    let y = r*sin(radians(ang*i));
    push();
    translate(x, y);
    rotate(PI/2+radians(ang*i+k));
    line(- l, 0, l, 0);
    pop();
  }
  k=180*sin(radians(t));
  if (t<90) t+=2;
  else t=0;
}
