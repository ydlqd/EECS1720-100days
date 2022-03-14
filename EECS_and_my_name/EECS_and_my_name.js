let t = 'Donglin EEcs1720';
let angle = 0;
let hue = 0;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
}

function draw() {
  background(0, 0.1);
  
  textSize(70);
  let startX = (width - textWidth(t)) / 2;
  let currentX = startX;
  let a = angle;
  if (frameCount % 5 == 0) {
    hue = (hue + 5) % 360;
  }
  let h = hue;
  
  for (let i = 0; i < t.length; i++) {
    let chr = t.charAt(i);
    let y = height / 2 + (sin(a) * mouseY);
    fill(h, 100, 100, 0.8);
    text(chr, currentX, y);
    h += 1;
    currentX += textWidth(chr);
    a += mouseX / 800;
  }
  
  angle -= 0.15;
}
