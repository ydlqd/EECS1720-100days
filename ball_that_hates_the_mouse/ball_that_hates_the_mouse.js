let bendAmount = 5;

function setup() {
  createCanvas(640, 640);
  fill(0, 250, 55, 100);
  noStroke();
}

function draw() {
  background(255);
  for (let i = 0; i < 360; i++) {
    let x = width/2+sin(radians(i)) * 150;
    let y = height/2+cos(radians(i)) * 150;
    
    /* Gives the circle a liquid appearence. */
    let d = map(dist(mouseX, mouseY, x, y), -150, 150, -bendAmount/2+3, bendAmount/2);
    
    push();
    translate(x, y);
    /* Rotate to face the mouse coords. */
    let angle = atan2(mouseX-x, mouseY-y);
    rotate(radians(90)-angle);
    /* By pushing the ellipse by "-bendAmount", the program rotates it on that coord, giving the split effect. */
    ellipse(-bendAmount, 0, d, d);
    pop();
  }
}
