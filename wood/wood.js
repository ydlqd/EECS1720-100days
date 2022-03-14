let r, r0, dr;
let x, y;
let i = 0;
let alfa;

function setup()
{
  createCanvas(400, 400);
 
  x = width/2;
  y = height/2;
  
  newTrunk();
}

function draw()
{  
  beginShape();
  for (let theta = 0; theta < TWO_PI; theta += radians(1))
  {
    let n = map(theta, 0, TWO_PI, 2, 6);
    n = map(noise(n,i/100), 0, 1, -dr, dr);
    r = r0 + n;
    vertex(x + r*cos(alfa + theta),y + r*sin(alfa + theta));  
  }
  endShape(CLOSE);
  
  i += 0.1;
  r0 -= 1;
  if (r0 < 0) noLoop();
  
  strokeWeight(1);
  stroke(95, 53, 10, 255*noise(i));
}

function mousePressed()
{
  newTrunk();
}


function newTrunk()
{
  loop();
  
  noiseSeed();
  r0 = 150;
  dr = 50;
  i = 0;
  alfa = random(TWO_PI);
  
  background(255, 198, 161);
  noFill();
  stroke(95, 53, 10);
  strokeWeight(3);  
}
