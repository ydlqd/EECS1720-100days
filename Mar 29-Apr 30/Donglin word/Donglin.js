let txtGraphics;
let graphicsArr = [];
let arrNum = 30;
let sepNum = 100;
let alphabet = "D";
let font;

function setup() {
  createCanvas(810, 610);
  angleMode(DEGREES);
  background(0);

  txtGraphics = createGraphics(width, height);
  txtGraphics.textAlign(CENTER, CENTER);
  txtGraphics.textFont('futura-bold');
  txtGraphics.textSize(500);
  let str = alphabet.substr(int(random(alphabet.length)),1);
  txtGraphics.text(str, txtGraphics.width /2, txtGraphics.height /1.8);

  for (let i = 0; i < arrNum; i++) {
    let g = createGraphics(width, height);
    g.fill(255);
    g.stroke(255);
    let r = map(i, 0, arrNum - 1, txtGraphics.width / 2, txtGraphics.width / 2 / arrNum);
    let rMin = r - txtGraphics.width / 1 / arrNum;
    g.beginShape();
    for (let angle = 0; angle < 360; angle += 360 / sepNum) {
      let x = g.width / 2 + cos(angle) * r;
      let y = g.height / 2 + sin(angle) * r;
      g.vertex(x, y);
    }
    g.beginContour();
    for (let angle2 = 360; angle2 > 0; angle2 -= 360 / sepNum) {
      let x = g.width / 2 + cos(angle2) * rMin;
      let y = g.height / 2 + sin(angle2) * rMin;
      g.vertex(x, y);
    }
    g.endContour();
    g.endShape(CLOSE);
    let t = createImage(width, height);
    t.copy(g, 0, 0, width, height, 0, 0, width, height);
    t.mask(txtGraphics);
    graphicsArr.push(t);
  }
}

function draw() {
  background(0,90);
  let i = 0;
  for (let t of graphicsArr) {
    imageMode(CENTER);
    push();
    translate(width / 2, height / 2);
    rotate(sin(i * 5 + frameCount * 4) * 30);
    image(t, 0, 0);
    pop();
    i++;
  }
}
